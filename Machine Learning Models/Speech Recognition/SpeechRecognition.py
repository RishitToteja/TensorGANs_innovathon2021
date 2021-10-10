import numpy as np
from gensim.models.keyedvectors import KeyedVectors
import speech_recognition as sr

# use this command to download the file - !wget -P /root/input/ -c "https://s3.amazonaws.com/dl4j-distribution/GoogleNews-vectors-negative300.bin.gz"
saved_vectors = 'GoogleNews-vectors-negative300.bin.gz'
EMBEDDING_FILE = 'GoogleNews-vectors-negative300.bin.gz'

# converting question paper to a list of strings of 5 words
with open("questionpaper.txt", "r") as file:
    data = file.read().replace("\n", " ")

data = data.split(" ")
question_paper = []
for i in range(int(len(data)/5)):
    question_paper.append(data[5*i: (5*i) + 5])

question_paper_list = []
for i in question_paper:
    empty = ""
    for j in i:
        empty += (j + " ")
    question_paper_list.append(empty)

class DocSim:
    def __init__(self, w2v_model, stopwords=None):
        self.w2v_model = w2v_model
        self.stopwords = stopwords if stopwords is not None else []

    def vectorize(self, doc: str) -> np.ndarray:
        """
        Identify the vector values for each word in the given document
        :param doc:
        :return:
        """
        doc = doc.lower()
        words = [w for w in doc.split(" ") if w not in self.stopwords]
        word_vecs = []
        for word in words:
            try:
                vec = self.w2v_model[word]
                word_vecs.append(vec)
            except KeyError:
                # Ignore, if the word doesn't exist in the vocabulary
                pass

        # Assuming that document vector is the mean of all the word vectors
        vector = np.mean(word_vecs, axis=0)
        return vector

    def _cosine_sim(self, vecA, vecB):
        """Find the cosine similarity distance between two vectors."""
        csim = np.dot(vecA, vecB) / (np.linalg.norm(vecA) * np.linalg.norm(vecB))
        if np.isnan(np.sum(csim)):
            return 0
        return csim

    def calculate_similarity(self, source_doc, target_docs=None, threshold=0):
        """Calculates & returns similarity scores between given source document & all
        the target documents."""
        if not target_docs:
            return []

        if isinstance(target_docs, str):
            target_docs = [target_docs]

        source_vec = self.vectorize(source_doc)
        results = []
        for doc in target_docs:
            target_vec = self.vectorize(doc)
            sim_score = self._cosine_sim(source_vec, target_vec)
            if sim_score > threshold:
                results.append({"score": sim_score, "doc": doc})
            # Sort results by score in desc order
            results.sort(key=lambda k: k["score"], reverse=True)

        return results


googlenews_model_path = EMBEDDING_FILE
stopwords_path = "stopwords_en.txt"

model = KeyedVectors.load_word2vec_format(googlenews_model_path, binary=True)
with open(stopwords_path, 'r') as fh:
    stopwords = fh.read().split(",")
ds = DocSim(model, stopwords=stopwords)

recognise = sr.Recognizer()
mic = sr.Microphone(device_index=1)  # mic device id is required here.

sound = True
count = 0

# recognizing voice continuously to for look for cheating
while sound:
    with mic as source:
        print("Starting recognition")
        recognise.adjust_for_ambient_noise(source)  # remove background noise
        audio = recognise.listen(source)  # take voice input from the microphone
        try:
            audio_text = recognise.recognize_google(audio)
            print(audio_text)
            source_doc = audio_text
            target_docs = question_paper_list
            sim_scores = ds.calculate_similarity(source_doc, target_docs)
            if sim_scores[0][list(sim_scores[0].keys())[0]] > 0.6:
                count += 1
            print(sim_scores)
            print("Number of Detected Cheating Attempts: {}".format(count))
        except:
            print("")


import numpy as np
from gensim.models.keyedvectors import KeyedVectors

# use this command to download the file - !wget -P /root/input/ -c "https://s3.amazonaws.com/dl4j-distribution/GoogleNews-vectors-negative300.bin.gz"
saved_vectors = 'GoogleNews-vectors-negative300.bin.gz'
EMBEDDING_FILE = 'GoogleNews-vectors-negative300.bin.gz'

#converting answers of the target student to a string
with open("plagChecking/answer_sheet1.txt", "r") as file:
    data1 = file.read().replace("\n", " ")
    
#converting answers of the other student to a list of strings
with open("plagChecking/answer_sheet2.txt", "r") as file:
    data2 = file.read().replace("\n", " ")

data2 = data2.split(" ")
answer_paper2 = []
for i in range(int(len(data2) / 5)):
    answer_paper2.append(data2[5 * i: (5 * i) + 5])

ans2 = []
for i in answer_paper2:
    empty = ""
    for j in i:
        empty += (j + " ")
    ans2.append(empty)


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
        # We could improvise here
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

source_doc = data1
target_docs = ans2 # we can provide multiple student's answers to check between them
sim_scores = ds.calculate_similarity(source_doc, target_docs)
count = 0
for i in sim_scores:
    count += i[list(i.keys())[0]]
count /= len(sim_scores)
print(sim_scores)
print(count)

cheating_mark = 0.75
if count > cheating_mark:
    print("High level of Cheating Detected. Please check this answer!!!")

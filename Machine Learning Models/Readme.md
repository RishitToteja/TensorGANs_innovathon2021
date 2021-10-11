## Machine Learning Models Used : 

1. **Eye Detection** :  Using OpenCV in Python made a program to Detect Human Faces and Facial Keypoints (Eyes). The project was carried out in Google Colab Environment.                                 Classifiers were loaded from OpenCV library.
                        For Face Detection, used *haarcascade_frontalface_default.xml* and for Eyes Detection, *haarcascade_eye.xml* was used. Eye Detection can be used for AI                           Proctoring to track user's eye movements and identify where the user is looking. It could help to detect Malicious Behaviour and alert the authorities.


2. **Headphones Detection** : Made a Headphones Dataset using images from *Google Images*. Train-Test split the dataset with a 90-10% ratio. First Performed Exploratory Data                                   Analysis on the dataset using OpenCV, numpy and matplotlib.
                              Built a Sequential model using TensorFlow Sequential API. The model used was sequential with a combination of convolutional layers, pooling layers,                               dropout layers, dense layers with relu activation and output layer with sigmoid activation. 
                              The dataset was obtained from kaggle. Metrics chosen for model evaluation were Training set, test set and validation  set accuracy. Adam optimizer                               with learning rate of 0.001 was choosed for gradient descent
                              The entire project was carried out on the Google Colab environment.
                              For AI Proctoring, Headphones Detection could be used to identify whether the user is using some other means of communication like headphones for                               cheating.
                              
3. **Malicious Object Detection** : Used *AlexeyAB's DarkNet* Deep Learning Architecture for performing YOLO V4 model predictions. Since the project was carried out in Google                                       Colab, Used a few Javascript Helper functions for geting live stream webcam access and then the output with YOLO predictions was obtained.
                                    In the output image, The Malicious Objects detected were bound inside a rectangular boxes.
                                    Malicious Object Detection, could be used for AI Proctoring System. If malicious objects like cell phones, calculators were detected in the                                       user's live stream, it would be immediately reported to the authorities and necessary action would be taken against the cheaters.
                                    
4. **Mouth Opening Detection** : Used OpenCV in Python for detecting whether the Mouth of the user is open or not. For Facial detection in OpenCV used *face_detect.xml* and for                                  detecting facial landmarks (mouth), dlib file, *shape_predictor_68_face_landmarks.dat* was used. Since the project was carried out in Google                                      Colab, Used a few Javascript Helper functions for geting live stream webcam access in google colab to make live predictions. 
                                 Rectangular bounding boxes were made on the Mouth detected. Also, if the mouth was open it was detected and printed on the Image.
                                 Mouth Detection is helpful for AI Proctoring, because the program would be able to detect if the user is speaking as the mouth would be open.
                                 This can help in identifying malicious behaviour and reducing cheating.
                                                                  
5. **Number of Persons Counter** : Made a program to detect the number of persons present in the user's live stream. Used OpenCV for people face detection. Bounding boxes were                                      made on each person's face for detection. Used Javascript Helper functions to enable webcam access on google colab.               
                                   This program is useful for AI proctoring system as it would be able to detect if there is more than one person present on the webcam. It could
                                   if the user is cheating or not by checking if anyone is assisting the user or not.

6. **Plagiarism Checker (Similarity Checking)** : The AI proctoring System would be able to check plagiarism amongst all the answers submitted by students to detect whether the                                                   user has cheated in the exam or not.
                                                  This model was a Word2Vec Model. The embeddings for the model were taken from the Google News Vectors. 
                                                  To find similarity between text, cosine similarity function was used. The final similairty score was the average score over all                                                   the scores of the text against other submissions. 
                                                  
7. **Speech Recognition** : Made a Speech recognition program in python to convert the speech to text and check wehther the user is cheating or not. For speech to text                                       conversion, used speech_recognition library in python.
                            After the speech was converted into string/text format, the text similarity was checked against the question paper to check whether the user was                                 speaking anything related to the question paper. This could be used to identify whehter the user is cheating or not.
                            

## Datasets
1. Headphone Dataset [Self Created](https://github.com/Toteja/Headphones_Dataset)
2. MS Coco Dataset
3. Google News Vector Dataset
4. Open CV Classifier Dataset

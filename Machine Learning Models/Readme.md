## Machine Learning Models Used : 

1. **Eye Detection** :  Using OpenCV in Python made a program to Detect Human Faces and Facial Keypoints (Eyes). The project was carried out in Google Colab Environment.                                   Classifiers were loaded from OpenCV library. For Face Detection, used *haarcascade_frontalface_default.xml* and for Eyes Detection, *haarcascade_eye.xml*                           was used. Eye Detection can be used for AI Proctoring to track user's eye movements and identify where the user is looking.
                        It could help to detect Malicious Behaviour and alert the authorities.


2. **Headphones Detection** : Made a Headphones Dataset using images from *Google Images*. Train-Test split the dataset with a 90-10% ratio. First Performed Exploratory Data                                     Analysis on the dataset using OpenCV, numpy and matplotlib.
                              Built a Sequential model using TensorFlow Sequential API. The model used was sequential with a combination of convolutional layers, pooling layers,                                 dropout layers, dense layers with relu activation and output layer with sigmoid activation. The dataset was obtained from kaggle. Metrics chosen for                               model evaluation were Training set, test set and validation set accuracy. Adam optimizer with learning rate of 0.001 was choosed for gradient descent
                              The entire project was carried out on the Google Colab environment.
                              For AI Proctoring, Headphones Detection could bes used to identify whether the user is using some other means of communication like headphones for                                 cheating.
                              
3. **Malicious Object Detection** : Used *AlexeyAB's DarkNet* Deep Learning Architecture for performing YOLO V4 model predictions. Since the project was carried out in Google                                         Colab, Used a few Javascript Helper functions for geting live stream webcam access and then the output with YOLO predictions was obtained.
                                    In the output image, The Malicious Objects detected were bound inside a rectangular boxes.
                                    Malicious Object Detection, could be used for AI Proctoring System. If malicious objects like cell phones, calculators were detected in the                                         user's live stream, it would be immediately reported to the authorities and necessary action would be taken against the cheaters.
                                    
                              
                        
     

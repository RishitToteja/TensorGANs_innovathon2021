# ProctorLess
*Changing the way teachers take examinations* 

## Team Name
**TensorGANs** 

## Team Members
- Aarushi Dua
- Aaryan Arora 
- Abhisht Dixit
- Rishit Toteja 

## Introduction
With the onset of COVID-19, students and teachers across the globe were forced to shift to online teaching. The lectures started being held over google meet or a zoom call, however, none of these software had a solution for proctoring online examinations. Human proctors were not able to check each student carefully, and thus it led to massive cheating and copying in online exams.
So with this issue in mind, we had a vision, i.e., to try to build an automated Artificial Intelligence model which could replace the human proctors and proctor each student more carefully. The model would also be able to check for similarity in the submission of students and report it to authorities. 
Apart from removing the burden from the shoulders of teachers, proctoring would become even more strict, and thus reduce misconduct and maintain the Institution’s Academic Integrity.

## Technologies Used:
1. Integrated Development Environment Used (IDE) : Google Colab, Pycharm and Replit
2. Programming Language : Python, Javascript, HTML, CSS, JSX
3. Frameworks and Libraries used : 
    - TensorFlow
    - Keras
    - OpenCV
    - NumPy
    - Matplotlib
    - Speech Recognition
    - Scikit-Learn
    - ReactJS
    - TailwindCSS
    - Animate.css
    - Tachyons
4. Deep Learning Architectures used :
    - Convolutional Neural Network
    - Recurrent Neural Network
    - Yolov4 with Darknet
    - Gensim.models
    - Pyaudio
    - Dlib

## Workflow
- The teacher/university shares the exam link
- The students goes to the website and goes through the login process
- The ML models are run on backend to detect cheating attemps coupled with website anti cheating methods
- The log of reported attempts is sent to the teacher/examiner 
- Student submits the exam
- Answers submitted are checked among the students for collaborative cheating attempts
- Teacher is provided the final reports with confidential personal info either removed/changed
- The result is announced
- No cheating and gain for both students and teachers!

## Flowchart

## Explanation of the models:
1. **Mouth Movement Tracking**: It detects whenever the student opens his/her mouth. This can help catch cheating attempts.
2. **Person Counting**: It detects the number of persons present in the room
3. **Malicious Object Detection**: It detects objects like books, notes, mobile phone, calculator and similar stuff which may be used for unfair means in examinations.
4. **Answer Similarity Checker**: It checks the similarity score of the answers submitted by the students to detect collaborative/direct copying of answers.
5. **Speech Recognition Surveillance**: It recognises any speech around the student and checks it for keywords in the question paper to detect asking of questions.
6. **Headphone Detection**: It detects whether the person is wearing a headphone or not to check for attempts to get answers using hidden audio devices.
7. **Eye Tracking**: It tracks the eyes of the student while he/she is giving the examination. It takes a log of repeated attempts of viewing in other directions.

## Website Features:
1. **Tab Switch Detection**
2. **Copy Pasting Detection**
3. **Warning System**
4. **Easy to use**

## Some special features:
1. **Parallel Processing**: We are using different models which will run on multiple threads of the server to optimise for higher efficiency, lower latency, improved accuracy and reduced resource requirements.
2. **Privacy**: No data is ever stored in any of our processes. All images, videos, audio, logs are all deleted as soon as the prediction is made and only very limited data is provided to the teachers(like type of misconduct, time and image without the photo of the student). This prevents any misuse of the platform. Also students and parents would be very comfortable to use it while still keeping strictness in exam conduction.
3. **No setup required**: This solution requires no additional setup from the students.
4. **With the students, For the students**: Our project is extremely simple to use and causes no concern or worry for the students. This system is developed to meet the needs of different students with different scenarios. The only aim is to help students perform better and makes teacher's life easier too. Win win for all!
5. **Low cost**: Due to us not storing any data and using parallel processing with very efficient models, the server costs are very low. They are much cheaper than hiring proctors. This can be extremely cost effective for entrance exams and universities taking exams for distance learning students.

## Why is our solution better?
1. **Higher Accuracy** : When AI would be used instead of humans for proctoring, the accuracy for detecting misdemeanor would increase. This is due to the fact that if a human were to be proctoring, he/she would not be able to check each student all the time, however if AI proctoring is used, each student would be under supervision at all times during the examination.

2. **Immediate Action** : If any anomaly is detected by AI, it would be reported immediately to the authorities and immediate action would be taken. However with human proctoring, there would be a delay between detecting the anomaly and the action taken against it.

3. **Remotely Accessible** : The AI model can be deployed easily for conduction of online examinations. Educational Institutions would not have to worry about delaying or postponing the examinations.

4. **Privacy**: No recordings or images would be saved ensuring that there is no threat of misuse and fear among students. Our AI model would be inclusive to all and prevent exploitation and promote fairness.

## Future Scope:
1. This could be deployed into a complete a product.
2. We can improve the accuracy of the headphone model.
3. New datasets with improved data can be used for improving the models
4. Efficiency of models could be improved with time as better algorithms are found.
5. An easy to use end to end solution can be setup for universities and testing agencies.

## Screenshots:

![alt text](/Screenshots/Cell%20phone.png).
![alt text](/Screenshots/Cell%20phone.png).
![alt text](/Screenshots/headphone2.JPG).
![alt text](/Screenshots/headphone3.JPG).
![alt text](/Screenshots/person.JPG).

![alt text](/Screenshots/Similarity%20checker.png).
![alt text](/Screenshots/Speech%20Recognition.png).
[Demo Video]()

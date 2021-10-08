import speech_recognition as sr

recognise = sr.Recognizer()
mic = sr.Microphone(device_index=1)  # mic device id is required here.

sound = True
# recognizing voice continuously to for look for cheating

while sound:
    with mic as source:
        recognise.adjust_for_ambient_noise(source)  # remove background noise
        audio = recognise.listen(source)  # take voice input from the microphone
        print(recognise.recognize_google(audio))  # to print voice into text

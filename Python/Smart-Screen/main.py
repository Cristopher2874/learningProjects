import cv2
import numpy as np

# Load the face cascade classifier
face_cascade = cv2.CascadeClassifier(r'C:\Users\Gokus\OneDrive\Escritorio\learningProjects\Python\Smart-Screen\haarcascade_frontalface_default.xml')

# Start video capture (0 is usually the default webcam)
cap = cv2.VideoCapture(0)

while True:
    # Read frame from camera
    ret, img = cap.read()
    if not ret:
        break

    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Detect faces
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)

    # Draw rectangles around faces
    i = 0
    for (x,y,w,h) in faces:
        cv2.rectangle(img, (x, y), (x+w, y+h), (255,0,0), 2)
        i = i + 1
        cv2.putText(img, ('Face_%03d' % i), (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0,0,255), 1, cv2.LINE_AA)
        roi_gray = gray[y:y+h, x:x+w]
        roi_color = img[y:y+h, x:x+w]

    # Show the frame
    cv2.imshow('Video', img)

    # Break loop with 'q' key
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release resources
cap.release()
cv2.destroyAllWindows()
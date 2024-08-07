import cv2
from pyapriltags import Detector
import pygame

# Inicializar pygame
pygame.mixer.init()

camera_index = 0
specific_tag_id = 0
sound_path = r'C:\Users\Gokus\OneDrive\Escritorio\learningProjects\Python\Music-tags\utils\audio\audio_sample1.mp3'

# Cargar el sonido
sound = pygame.mixer.Sound(sound_path)

# Crear un objeto detector de AprilTag con el tipo de tag adecuado
detector = Detector('tag36h11')

# Create a VideoCapture object
cap = cv2.VideoCapture(camera_index)

while True:
    # Capture a frame from the camera
    ret, frame = cap.read()
    
    if not ret:
        break
    
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detectar etiquetas en la imagen
    results = detector.detect(gray_frame)

    # Verificar el número de resultados detectados
    if not results:
        print("No se detectaron etiquetas.")
    else:
        print(f"Se detectaron {len(results)} etiquetas.")
        # Procesar y mostrar resultados
        for result in results:
            print(f"ID de la etiqueta: {result.tag_id}")
            print(f"Corners: {result.corners}")

            if result.tag_id == specific_tag_id:
                sound.play()
                #time.sleep(0.2)
            else:
                sound.stop()

        # Dibujar las etiquetas detectadas en la imagen
        for result in results:
            # Dibujar los bordes del tag
            for i in range(len(result.corners)):
                pt1 = (int(result.corners[i][0]), int(result.corners[i][1]))
                pt2 = (int(result.corners[(i + 1) % 4][0]), int(result.corners[(i + 1) % 4][1]))
                cv2.line(frame, pt1, pt2, (0, 255, 0), 2)
            
            # Mostrar el ID del tag cerca del tag
            cv2.putText(frame, str(result.tag_id), 
                        (int(result.corners[0][0]), int(result.corners[0][1]) - 10), 
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)

    # Mostrar la gray_framen con las etiquetas detectadas
    cv2.imshow('Detected AprilTags', frame)   

    # Exit on key press
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the VideoCapture object and close all windows
cap.release()
cv2.destroyAllWindows()
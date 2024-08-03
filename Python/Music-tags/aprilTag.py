import cv2
from pyapriltags import Detector

# Ruta al archivo de imagen
image_path = r'C:\Users\Gokus\OneDrive\Escritorio\learningProjects\Python\Music-tags\s5.jpg'

# Cargar la imagen en escala de grises
image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)

# Verificar si la imagen se ha cargado correctamente
if image is None:
    print("Error: la imagen no se pudo cargar. Verifica la ruta del archivo.")
    exit()

# Crear un objeto detector de AprilTag con el tipo de tag adecuado
detector = Detector('tag36h11')

# Detectar etiquetas en la imagen
results = detector.detect(image)

# Verificar el número de resultados detectados
if not results:
    print("No se detectaron etiquetas.")
else:
    print(f"Se detectaron {len(results)} etiquetas.")
    # Procesar y mostrar resultados
    for result in results:
        print(f"ID de la etiqueta: {result.tag_id}")
        print(f"Corners: {result.corners}")

    # Dibujar las etiquetas detectadas en la imagen
    for result in results:
        # Dibujar los bordes del tag
        for i in range(len(result.corners)):
            pt1 = (int(result.corners[i][0]), int(result.corners[i][1]))
            pt2 = (int(result.corners[(i + 1) % 4][0]), int(result.corners[(i + 1) % 4][1]))
            cv2.line(image, pt1, pt2, (0, 255, 0), 2)
        
        # Mostrar el ID del tag cerca del tag
        cv2.putText(image, str(result.tag_id), 
                    (int(result.corners[0][0]), int(result.corners[0][1]) - 10), 
                    cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    # Mostrar la imagen con las etiquetas detectadas
    cv2.imshow('Detected AprilTags', image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

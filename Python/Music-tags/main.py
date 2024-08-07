import threading
import queue
from camera_entry import CameraReader
from tag_manager import TagDetector
from sound_mixer import SoundPlayer
from worker import worker
from utils.config import CAMERA_INDEX, SOUND_PATHS, SPECIFIC_TAG_IDS

# Cola para pasar frames de la cámara al detector de tags
frame_queue = queue.Queue()
# Cola para pasar IDs de tags detectados al reproductor de sonido
tag_queue = queue.Queue()

stop_event = threading.Event()

def main():
    # Crear y empezar otros threads de trabajo
    workers = []

    camera_reader = CameraReader(CAMERA_INDEX, frame_queue, stop_event)
    tag_detector = TagDetector(frame_queue, tag_queue, SPECIFIC_TAG_IDS)
    sound_player = SoundPlayer(tag_queue, SOUND_PATHS)

    # Crear hilos para cada tarea
    camera_thread = threading.Thread(target=camera_reader.start)
    detector_thread = threading.Thread(target=tag_detector.start)
    sound_thread = threading.Thread(target=sound_player.start)

    for i in range(3):  # Ajusta el número de threads según sea necesario
        t = threading.Thread(target=worker, args=(i, stop_event))
        workers.append(t)
        t.start()

    try:
        # Esperar que el thread de video termine
        camera_thread.join()
    except KeyboardInterrupt:
        print("Interrupción del teclado recibida, terminando threads.")
        stop_event.set()

    # Asegurar que todos los threads de trabajo también terminen
    for t in workers:
        t.join()

    print("Programa terminado correctamente.")

    """# Iniciar hilos
    camera_thread.start()
    detector_thread.start()
    sound_thread.start()

    # Esperar a que los hilos terminen
    camera_thread.join()
    detector_thread.join()
    sound_thread.join()"""

if __name__ == "__main__":
    main()



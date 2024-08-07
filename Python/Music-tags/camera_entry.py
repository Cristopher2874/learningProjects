import cv2
import threading

class CameraReader(threading.Thread):
    def __init__(self, camera_index, frame_queue, stop_event):
        super().__init__()
        self.camera_index = camera_index
        self.frame_queue = frame_queue
        self.stop_event = stop_event

    def start(self):
        cap = cv2.VideoCapture(self.camera_index)
        while cap.isOpened() and not self.stop_event.is_set():
            ret, frame = cap.read()
            if ret:
                gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
                self.frame_queue.put(gray_frame)

            if cv2.waitKey(1) & 0xFF == ord('q'):
                self.stop_event.set()
                
        cap.release()
        cv2.destroyAllWindows()

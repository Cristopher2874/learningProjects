import cv2
from pyapriltags import Detector

class TagDetector:
    def __init__(self, frame_queue, tag_queue, specific_tag_ids):
        self.frame_queue = frame_queue
        self.tag_queue = tag_queue
        self.specific_tag_ids = specific_tag_ids
        self.detector = Detector(families='tag36h11')

    def start(self):
        while True:
            frame = self.frame_queue.get()
            if frame is None:
                break
            results = self.detector.detect(frame)
            for result in results:
                if result.tag_id in self.specific_tag_ids:
                    self.tag_queue.put(result.tag_id)

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

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        
        cv2.destroyAllWindows()

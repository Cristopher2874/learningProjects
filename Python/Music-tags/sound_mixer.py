import pygame
import cv2

class SoundPlayer:
    def __init__(self, tag_queue, sound_paths):
        pygame.mixer.init()
        self.tag_queue = tag_queue
        self.sound_paths = sound_paths
        self.sounds = {tag_id: pygame.mixer.Sound(path) for tag_id, path in sound_paths.items()}

    def start(self):
        while True:
            tag_id = self.tag_queue.get()
            if tag_id is None:
                break
            if tag_id in self.sounds:
                self.sounds[tag_id].play()

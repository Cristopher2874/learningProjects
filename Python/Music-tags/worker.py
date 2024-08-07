import time

def worker(num, stop_event):
    while not stop_event.is_set():
        print(f'Task {num} running')
        time.sleep(1)
        if stop_event.is_set():
            print(f'Task {num} stopping')
            break
    print(f'Task {num} terminated')
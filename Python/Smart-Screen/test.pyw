import tkinter as tk
from ctypes import windll
#TODO: find a catch solution to instructions in screen
#temp catch solution
import pyautogui as pg

root = tk.Tk()
root.title("smart screen")
root.geometry("200x50-5+40")
root.attributes("-topmost", 1) #always on top
root.attributes("-alpha", 0.5) #opacity

frame = tk.Frame(root)
frame.config(bg="white")
frame.pack(fill="both", expand=True)

startTime = windll.kernel32.GetTickCount() / 1000
pauseStartTime = 0
BREAK_IINTERVAL = 1500 #25 minutes
BREAK_TIME = 180 #3 minutes
IS_BREAK = False
IS_PAUSE = False

def getTime():
    global startTime, IS_BREAK, IS_PAUSE,pauseStartTime
    currentTime = windll.kernel32.GetTickCount() / 1000

    if not IS_PAUSE:
        if pauseStartTime != 0:
            startTime += currentTime - pauseStartTime
            pauseStartTime = 0
        lap = currentTime - startTime
        
        minutes = lap%3600 / 60
        seconds = lap%60
        levelLabel.config(text=(f"Time: {int(minutes)}:{int(seconds)}"))
    else:
        if pauseStartTime == 0:
            pauseStartTime = currentTime
        lap = currentTime - startTime    

    interval = BREAK_IINTERVAL if not IS_BREAK else BREAK_TIME #switch interval

    if(lap>interval and not IS_PAUSE):
        if IS_BREAK:
            normalScreen()
            IS_BREAK = False
        else:
            blockScreen()
            IS_BREAK = True
        startTime = currentTime
    root.after(1000, getTime)

def blockScreen():
    root.attributes("-fullscreen", 1)
    root.attributes("-alpha", 1) #opacity
    root.grab_set() #block other elements
    pauseButton.config(state=tk.DISABLED)  # Disable during break
    #Lock the event listener?
    #TODO: find a catch solution to instructions in screen
    pg.click() #temp catch solution

def normalScreen():
    root.attributes("-fullscreen", 0)
    root.attributes("-alpha", 0.5) #opacity
    pauseButton.config(state=tk.NORMAL)  # Disable during break
    #TODO: Unlock the event listener?

def pause():
    global IS_PAUSE
    if IS_PAUSE:
        IS_PAUSE = False
        pauseButton.config(text="Pause")
    else:
        IS_PAUSE = True
        pauseButton.config(text="Resume")

levelLabel = tk.Label(frame, text="", font=("Arial", 12))
levelLabel.grid(column=0, row=0, padx=10, pady=10, sticky="w")
pauseButton = tk.Button(frame, text="Pause", command=pause)
pauseButton.grid(column=1, row=0, padx=10, pady=10, sticky="e")

getTime()

root.mainloop()
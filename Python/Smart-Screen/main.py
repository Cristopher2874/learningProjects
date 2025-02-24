import tkinter as tk # GUI
from ctypes import windll #Obtener el tiempo en windows
import pyautogui as pg #
#TODO: find solution to catch user actions in screen

# Create the main root app
root = tk.Tk()
root.title("smart screen")
root.geometry("500x50-5+40")
root.attributes("-topmost", 1) #always on top
root.attributes("-alpha", 0.5) #opacity

# container
frame = tk.Frame(root)
frame.config(bg="white")
frame.pack(fill="both", expand=True)

#-----Main variables-----#

startTime = windll.kernel32.GetTickCount() / 1000
pauseStartTime = 0

usertime = 10

#Time to work
BREAK_IINTERVAL = 1500 #25 minutes
#Time in break
BREAK_TIME = 180 #3 minutes
#Know if the program is in break
IS_BREAK = False
#Know if the program is in pause
IS_PAUSE = False

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
        timerLabel.config(text=(f"Time: {int(minutes)}:{int(seconds)}"))
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
    # Update each second
    root.after(1000, getTime)

# Pause function
def pause():
    global IS_PAUSE
    if IS_PAUSE:
        IS_PAUSE = False
        pauseButton.config(text="Pause")
    else:
        IS_PAUSE = True
        pauseButton.config(text="Resume")

#User time function
def increaseTime():
    global usertime
    if usertime <=110:
        usertime += 10
    else: usertime = 120
    selectTime.config(text=(f"{usertime} minutos"))
def decreaseTime():
    global usertime
    if usertime >10:
        usertime -= 10
    else: usertime = 10
    selectTime.config(text=(f"{usertime} minutos"))


selectTime = tk.Label(frame, text=(f"{usertime} minutos"), font=("Arial", 12))
selectTime.grid(column=1, row=0, padx=10, pady=10, sticky="w")
sumButton = tk.Button(frame, text="+", command=increaseTime)
sumButton.grid(column=0, row=0, padx=10, pady=10, sticky="e")
restButton = tk.Button(frame, text="-", command=decreaseTime)
restButton.grid(column=2, row=0, padx=10, pady=10, sticky="e")
startButton = tk.Button(frame, text="START", command=getTime)
startButton.grid(column=3, row=0, padx=10, pady=10, sticky="e")

timerLabel = tk.Label(frame, text="", font=("Arial", 12))
timerLabel.grid(column=0, row=1, padx=10, pady=10, sticky="w")
pauseButton = tk.Button(frame, text="Pause", command=pause)
pauseButton.grid(column=1, row=1, padx=10, pady=10, sticky="e")

#getTime()

root.mainloop()
import tkinter as tk # GUI
from ctypes import windll #Obtener el tiempo en windows
#import pyautogui as pg #
#TODO: find solution to catch user actions in screen

# Create the main root app
root = tk.Tk()
root.title("smart screen")
root.geometry("350x120-5+40")
root.attributes("-topmost", 1) #always on top
root.attributes("-alpha", 0.5) #opacity

# container
frame = tk.Frame(root)
frame.config(bg="white")
frame.pack(fill="both", expand=True)

#-----Main variables-----#

startTime = 0
pauseStartTime = 0

usertime = 5
workInterval = 300
breakTime = 180

#Know if the program is in break
IS_BREAK = False
#Know if the program is in pause
IS_PAUSE = False

flag = False

def blockScreen():
    root.attributes("-fullscreen", 1)
    root.attributes("-alpha", 1) #opacity
    root.grab_set() #block other elements
    pauseButton.config(state=tk.DISABLED)  # Disable during break
    stopButton.config(state=tk.DISABLED)
    #Lock the event listener?
    #TODO: find a catch solution to instructions in screen
    #pg.click() #temp catch solution

def normalScreen():
    root.attributes("-fullscreen", 0)
    root.attributes("-alpha", 0.5) #opacity
    pauseButton.config(state=tk.NORMAL)  # Disable during break
    stopButton.config(state=tk.NORMAL)
    #TODO: Unlock the event listener?

def getTime():
    global startTime, IS_BREAK, IS_PAUSE,pauseStartTime, workInterval, breakTime, flag
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

    interval = workInterval if not IS_BREAK else breakTime #switch interval

    if(lap>interval and not IS_PAUSE):
        if IS_BREAK:
            normalScreen()
            IS_BREAK = False
        else:
            blockScreen()
            IS_BREAK = True
        startTime = currentTime
    # Update each second
    if not flag:
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
        usertime += 5
    else: usertime = 120
    selectTime.config(text=(f"{usertime} minutes"))
def decreaseTime():
    global usertime
    if usertime >5:
        usertime -= 5
    else: usertime = 5
    selectTime.config(text=(f"{usertime} minutes"))

def startTimer():
    global startTime, workInterval, breakTime, usertime, IS_PAUSE, IS_BREAK, flag

    startTime = windll.kernel32.GetTickCount() / 1000
    workInterval = usertime*60
    startButton.config(state="disabled")
    pauseButton.config(state="normal")
    IS_PAUSE = False
    IS_BREAK = False
    flag = False
    getTime()

def stopTimer():
    global usertime, workInterval, breakTime, IS_BREAK, IS_PAUSE, flag
    startButton.config(state="normal")
    pauseButton.config(state="disabled")
    workInterval = usertime
    breakTime = 180
    #Know if the program is in break
    IS_BREAK = False
    #Know if the program is in pause
    IS_PAUSE = True
    pause()
    flag = True
    normalScreen()
    timerLabel.config(text=(f"Time: 0:0"))

selectTime = tk.Label(frame, text=(f"{usertime} minutes"), font=("Arial", 12))
selectTime.grid(column=1, row=0, padx=10, pady=10, sticky="w")
restButton = tk.Button(frame, text="-", command=decreaseTime)
restButton.grid(column=0, row=0, padx=10, pady=10, sticky="e")
sumButton = tk.Button(frame, text="+", command=increaseTime)
sumButton.grid(column=2, row=0, padx=10, pady=10, sticky="e")
startButton = tk.Button(frame, text="START", command=startTimer)
startButton.grid(column=3, row=0, padx=10, pady=10, sticky="e")
stopButton = tk.Button(frame, text="Stop", command=stopTimer)
stopButton.grid(column=4, row=0, padx=10, pady=10, sticky="e")

timerLabel = tk.Label(frame, text="", font=("Arial", 12))
timerLabel.grid(column=1, row=1, padx=10, pady=10, sticky="w")
pauseButton = tk.Button(frame, text="Pause", command=pause)
pauseButton.grid(column=3, row=1, padx=10, pady=10, sticky="e")
pauseButton.config(state="disabled")

root.mainloop()

"""
n = filas de la matriz
m = columnas de la matriz

i = 0 coordenada de fila
j = 0 coordenada de columna

si i = n y j = m y [i][j] diferentes de x
regresar falso, no hay matriz o x

Para i = 0; i menor a n; i++
    para j = 0; j menor que m; j++
        si [i][j] = x
            regresar cierto (encontramos una x)

regresar falso (no hay x)

"""
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
BREAK_IINTERVAL = 60

def getTime():
    global startTime, levelLabel
    currentTime = windll.kernel32.GetTickCount() / 1000
    lap = currentTime - startTime
    minutes = lap%3600 / 60
    seconds = lap%60
    levelLabel.config(text=(f"Time: {int(minutes)}:{int(seconds)}"))
    if(lap>BREAK_IINTERVAL):
        blockScreen()
        startTime = currentTime
        breakScreen()
    root.after(1000, getTime)

def blockScreen():
    root.attributes("-fullscreen", 1)
    root.attributes("-alpha", 1) #opacity
    root.grab_set() #block other elements
    #Lock the event listener?
    #TODO: find a catch solution to instructions in screen
    pg.click() #temp catch solution


def normalScreen():
    root.attributes("-fullscreen", 0)
    #Unlock the event listener?

def breakScreen():
    global startTime, levelLabel
    currentTime = windll.kernel32.GetTickCount() / 1000
    lap = currentTime - startTime
    minutes = lap%3600 / 60
    seconds = lap%60
    levelLabel.config(text=(f"Time: {int(minutes)}:{int(seconds)}"))
    if(lap>10):
        normalScreen()
        startTime = currentTime
        getTime()
    root.after(1000, breakScreen)


levelLabel=tk.Label(frame,text=(""),font=("Arial", 12))
levelLabel.grid(column=0,row=0,padx=10,pady=10,columnspan=4)

getTime()

root.mainloop()

#IA count: 7
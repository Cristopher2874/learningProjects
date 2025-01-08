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
BREAK_IINTERVAL = 1500 #25 minutes
BREAK_TIME = 180 #3 minutes
IS_BREAK = False

def getTime():
    global startTime, IS_BREAK
    currentTime = windll.kernel32.GetTickCount() / 1000
    lap = currentTime - startTime
    minutes = lap%3600 / 60
    seconds = lap%60

    interval = BREAK_IINTERVAL if not IS_BREAK else BREAK_TIME #switch interval

    levelLabel.config(text=(f"Time: {int(minutes)}:{int(seconds)}"))
    
    if(lap>interval):
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
    #Lock the event listener?
    #TODO: find a catch solution to instructions in screen
    pg.click() #temp catch solution


def normalScreen():
    root.attributes("-fullscreen", 0)
    root.attributes("-alpha", 0.5) #opacity
    #TODO: Unlock the event listener?

levelLabel=tk.Label(frame,text=(""),font=("Arial", 12))
levelLabel.grid(column=0,row=0,padx=10,pady=10,columnspan=4)

getTime()

root.mainloop()
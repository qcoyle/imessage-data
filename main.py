from datetime import date
from random import randint
import eel
from tools import *

eel.init("web")

@eel.expose
def seeAllDatesPython():
    print("All dates button clicked")
    startDate = "2014-07-02"
    endDate = date.today().strftime("%Y-%m-%d")
    return "Number of chats between {} and {} is {}".format(startDate, endDate, byRange(startDate, endDate))

@eel.expose
def seeRangePython(startDate, endDate):
    print("Range button clicked")
    return "Number of chats between {} and {} is {}".format(startDate, endDate, byRange(startDate, endDate))

@eel.expose    
def random_python():
    print("Random function running")
    return randint(1,100)

eel.start("index.html", app_mode = False)

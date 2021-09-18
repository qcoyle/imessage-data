from pathlib import Path
import pandas as pd
import plotly.express as px


archivePath = "/Users/qtcoyle/Library/Containers/com.apple.iChat/Data/Library/Messages/Archive/" # Do not modify
messagessArchive = Path(archivePath)
columns = ["Date", "Number of chats"]


def byRange(start, end):
    if start and end and start < end:
        dateRange = pd.date_range(start, end)
        df = pd.DataFrame(columns = columns)

        for i in dateRange:
            date = i.strftime("%Y-%m-%d") # Strip the 00:00:00
            day = Path(archivePath + "/" + date)
            
            dayMessages = 0 # Counter for conversations per day
            try:
                for child in day.iterdir():
                    # print(child) # We will use this in future to get individual conversation names
                    dayMessages = dayMessages + 1
            except FileNotFoundError:
                dayMessages = 0

            newRow = {columns[0]:date, columns[1]:dayMessages}
            df = df.append(newRow, ignore_index=True)

        rangeGraph(df)    
        return rangeSum(df)        


def rangeGraph(df):
    fig = px.bar(df, x=columns[0], y=columns[1])
    fig.update_layout(
        title_text="iMessage Data", 
        title_x = 0.5,
        font=dict(
            family="Overpass, monospace",
            size=18
        ))
    fig.show()


def rangeSum(df):
    return df[columns[1]].sum()
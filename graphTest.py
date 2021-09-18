from iMessageTools import *

df = byRange("2018-02-02", "2018-02-20")
assert rangeSum(df) == 273

rangeGraph(df)
import math


def squares(a, b):
    s = ""
    for i in range(a, b + 1):
        if math.sqrt(i).is_integer():
            s += str(i) + " "

    if s != "":
        print(s)


squares(int(input()), int(input()))

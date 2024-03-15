import math
def squares(a):
    s=""
    i=1
    while(i<=a):
        if (math.sqrt(i).is_integer()): s+=str(i)+" "
        i+=1
    return s

print(squares(int(input())))
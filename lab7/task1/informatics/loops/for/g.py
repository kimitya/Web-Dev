def division(a):
    for i in range (2, a+1):
        if (a%i==0): return i
        
print(division(int(input())))


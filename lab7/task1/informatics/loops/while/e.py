def log(n):
    mul=1
    i=0
    while(mul<n):
        mul*=2
        i+=1
    return i
    
print(log(int(input())))
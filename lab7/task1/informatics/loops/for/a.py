def even(a, b):
    s=""
    for i in range(a, b+1) :
        if (a%2==0): s+=str(a)+" "
    return s
        
print(even(int(input()), int(input())))
    
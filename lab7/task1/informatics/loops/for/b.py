def func(a, b, c, d):
    s=""
    for i in range(a, b+1) :
        if(i%d==c): s+=str(i)+" "
    
    return s

print(func(int(input()), int(input()), int(input()), int(input())))
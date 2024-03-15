def dividers(a):
    k=1
    for i in range(1, int(a/2)+1):
        if a % i == 0: k+=1
    return k

print(dividers(int(input())))
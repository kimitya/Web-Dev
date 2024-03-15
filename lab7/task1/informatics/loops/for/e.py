def sum(x):
    s=str(x)
    a=0
    for i in s:
        a+=int(i)
    return a

print(sum(int(input())))
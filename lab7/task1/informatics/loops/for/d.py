def func(x, d):
    s = str(x)
    t = str(d)
    a = 0
    for i in s:
        if i == t:
            a += 1
    return a


print(func(int(input()), int(input())))

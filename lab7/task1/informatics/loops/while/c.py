def two(a):
    s = "1 "
    i = 1
    b = 1
    while i <= a:
        b *= 2
        if b > a:
            break
        s += str(b) + " "
    return s


print(two(int(input())))

def square(a):
    if a == 1:
        return "YES"
    i=1
    b=1
    while (i <= a):
        b *= 2
        if (b>a): return "NO"
        if b == a:
            return "YES"
        i += 1
    return "NO"

print(square(int(input())))

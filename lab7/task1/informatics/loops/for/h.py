def dividers(a):
    s = ""
    for i in range(1, a + 1):
        if a % i == 0:
            s += str(i) + " "
    return s

print(dividers(int(input())))
def divisor(a):
    i = 2
    while i <= a:
        if a % i == 0:
            return i
        i += 1


print(divisor(int(input())))

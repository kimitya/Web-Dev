def orr(a, b):
    if (not a and not b) or (a and b):
        return 0
    return 1


a, b = [bool(int(i)) for i in input().split()]

print(orr(a, b))

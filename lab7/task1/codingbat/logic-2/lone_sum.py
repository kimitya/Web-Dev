def lone_sum(a, b, c):
    sum = 0
    if a == b and b == c:
        return 0
    if a == b:
        return c
    if a == c:
        return b
    if c == b:
        return a
    return a + b + c

def comparison (a, b):
    if (a>b): return 1
    if (b>a): return 2
    return 0

print(comparison(int(input()), int(input())))
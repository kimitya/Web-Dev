def division (n, k):
    return int((k-(k%n))/n)

print(division(int(input()), int(input())))
def position (v, t):
    s=v*t
    while (s<0):
        s+=109
    while (s>109):
        s-=109
    return s

print(position(int(input()), int(input())))
def in1to10(n, outside_mode):
    if outside_mode:
        return True if (n <= 1 or n >= 10) else False
    return n in range(1, 11)

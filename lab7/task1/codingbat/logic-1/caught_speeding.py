def caught_speeding(speed, is_birthday):
    if is_birthday:
        if speed <= 65:
            return 0
        if speed in range(65, 86):
            return 1
        return 2
    else:
        if speed <= 60:
            return 0
        if speed in range(60, 81):
            return 1
        return 2

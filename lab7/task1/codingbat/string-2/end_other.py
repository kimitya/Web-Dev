def end_other(a, b):
    a = a.lower()
    b = b.lower()
    if (b[-(len(a)) :] == a) or (a[-(len(b)) :] == b):
        return True
    return False

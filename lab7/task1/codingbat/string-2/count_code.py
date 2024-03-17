def count_code(str):
    cnt = 0
    for i in range(0, len(str) - 3):
        if str[i] == "c" and str[i + 1] == "o" and str[i + 3] == "e":
            cnt += 1
    return cnt

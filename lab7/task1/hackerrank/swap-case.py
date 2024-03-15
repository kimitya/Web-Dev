def swap_case(s):
    t=""
    for i in s:
        if i.isupper():
            t+=i.lower()
        elif i.islower():
            t+=i.upper()
        else:
            t+=i
    return t

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)
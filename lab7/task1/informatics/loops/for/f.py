def reverse(a):
    s = str(a)
    reversed_s = s[::-1].lstrip('0')
    

    return int(reversed_s)

print(reverse(int(input())))
        

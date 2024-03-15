def decimal(a):
    s=str(a)
    reversed_s=s[::-1]
    sum=0
    for i in range(0, len(s)):
        if (reversed_s[i]=="1"): sum+=pow(2,i)
    return sum

print(decimal(int(input())))
    

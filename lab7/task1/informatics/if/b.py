def leapyear(year):
    if ((year%4==0 and year%100!=0) or year%400==0): return "YES"
    return "NO"

print(leapyear(int(input())))

def minn(a,b,c,d):
    if (a<b and a<c and a<d): return a
    if (b<a and b<c and b<d): return b
    if (c<a and c<b and c<d): return c
    return d
arr = [int(i) for i in input().split()]
print(minn(arr))
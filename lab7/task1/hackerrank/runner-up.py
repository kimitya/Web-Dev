if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    maxx = max(arr)
    minn = min(arr)
    for i in arr:
        if i<maxx and i>minn:
            minn=i
    print(minn)
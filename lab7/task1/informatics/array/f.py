n = int(input())
arr = [int(i) for i in input().split()]

cnt=0
for i in range (len(arr)-1):
    if (i-1>=0 and i+1<n):
        if (arr[i-1]<arr[i] and arr[i+1]<arr[i]):
            cnt+=1
        
print(cnt)
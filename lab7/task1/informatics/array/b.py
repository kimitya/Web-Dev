n=int(input())
arr = [int(i) for i in input().split()]
even = [arr[i] for i in range(len(arr)) if arr[i]%2==0]
        
print(*even)
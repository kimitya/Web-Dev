n = int(input())
arr = [int(i) for i in input().split()]
bigger = [arr[i] for i in range(len(arr)-1) if arr[i] < arr[i +1]]

print(len(bigger))

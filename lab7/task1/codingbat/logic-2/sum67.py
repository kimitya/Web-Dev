def sum67(nums):
    flag = True
    sum = 0
    for i in nums:
        if i == 6:
            flag = False
        if flag:
            sum += i
        if i == 7:
            flag = True
    return sum

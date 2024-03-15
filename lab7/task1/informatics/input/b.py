def nextnum(a):
    return (
        "The next number for the number %d is %d.\nThe previous number for the number %d is %d."
        % (a, a + 1, a, a - 1)
    )


print(nextnum(int(input())))

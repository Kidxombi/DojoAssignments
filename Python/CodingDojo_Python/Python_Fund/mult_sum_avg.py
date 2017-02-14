def odds():
    for i in range(1000):
        if i % 2 != 0:
            print i

def five():
    for i in range(5, 1000001):
        if i % 5 == 0:
            print i

def sum():
    a = [1, 2, 5, 10, 255, 3]
    sum = 0
    for i in a:
        sum += i
    print sum
    print sum / len(a)

# odds()

# five()

sum()

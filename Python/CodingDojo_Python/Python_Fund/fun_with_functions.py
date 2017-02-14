def oddEven():
    for i in range(2001):
        x = "This is an even number" if i % 2 == 0 else "This is an odd number"
        print "Number is {}.  {}".format(i, x)

def multBy(lst, x):
    for i in range(len(lst)):
        lst[i] *= x
    return lst

def hackChal(x = multBy([2,4,6,8,10], 2)):
    for i in range(len(x)):
        x[i] = [1]*x[i]
    print x

hackChal()

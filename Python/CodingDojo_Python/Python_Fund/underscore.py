class Underscore(object):
    def filter(self, lst, lam):
        for i in range(len(lst)-1, 0, -1):
            if lam(lst[i]):
                lst.pop(i)
        return lst

x = Underscore()
print x.filter([1, 2, 24, 27, 33, 21, 3, 4, 5, 6, 7, 18], lambda x: x % 4 == 0)

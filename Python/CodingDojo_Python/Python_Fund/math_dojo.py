class MathDojo(object):

    def __init__(self):
        self.result = 0


    def add(self, *args):
        for i in range(0, len(args)):
            if isinstance(args[i], (list, tuple)):
                self.result += sum(args[i])
            elif isinstance(args[i], int):
                self.result += args[i]
            else:
                print "No strings please!"
                break
        return self
 
    def subtract(self, *args):
        for i in range(0, len(args)):
            if isinstance(args[i], (list, tuple)):
                self.result -= sum(args[i])
            elif isinstance(args[i], int):
                self.result -= args[i]
            else:
                print "No strings please!"
                break
        return self

md = MathDojo()

md.add(2).add(2, 5).subtract(3, 2)
print md.result

md.add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3])
print md.result

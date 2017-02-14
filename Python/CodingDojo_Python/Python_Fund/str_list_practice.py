str = "If monkeys like bananas, then I must be a monkey!"
print str.rfind('monkey')
print str.replace('monkey', 'alligator')

x = [2,54,-2,7,12,98]
print max(x), min(x)

y = ["hello",2,54,-2,7,12,98,"world"]
print y[0], y[-1]
z = [y[0], y[-1]]

k = [19,2,54,-2,7,12,98,32,10,-3,6]




l = [num for num in k if num < 0]
k = [num for num in k if num > 0]

l.push(0, k)
print l

import random

def scores():
    for i  in range(10):
        ranum = random.randint(1, 101)
        grade = None
        if ranum in range(90, 101):
            grade = "A"
        elif ranum in range(80, 90):
            grade = "B"
        elif ranum in range(70, 80):
            grade = "C"
        elif ranum in range(60, 70):
            grade = "D"
        else:
            grade = "F"
        print "Score: {}%, your grade is {}".format(ranum, grade)

scores()

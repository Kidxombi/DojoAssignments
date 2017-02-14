class Bike(object):

    def __init__(self, price, speed):
        self.price = price
        self.speed = speed
        self.miles = 0

    def display_info(self):
        print "This bike was ${}.00 and has a max speed of {}mph. You have traveled {} miles on this bike!".format(self.price, self.speed, self.miles)
        return self

    def ride(self):
        print "Riding..."
        self.miles += 10
        return self

    def reverse(self):
        print "Reversing..."
        self.miles -= 5
        return self

bike = Bike(500, 34)

bike.ride().ride().reverse().display_info()

class Car(object):

    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = 15 if self.price > 10000 else 12

    def display_all(self):
        print "Price: {}\nSpeed: {}mph\nFuel: {}\nMileage: {}mpg\nTax: {}".format(self.price, self.speed, self.fuel, self.mileage, self.tax)

car1 = Car(20000, 54, "Full", 56)
car2 = Car(9999, 756, "Almost Empty", 99)
car3 = Car(75649, 55, "Empty", 4)
car4 = Car(300000000, 2, "Almost Full", 55)
car5 = Car(300, 56, "Half Full", 4)
car6 = Car(5000, 87, "Half Empty", 66)

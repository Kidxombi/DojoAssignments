//: Playground - noun: a place where people can play

import UIKit

class Animal {
    var name: String
    var health = 100
    init(name: String){
        self.name = name

    }
    func displayHealth(){
        print("I have \(self.health) health!")
    }
}

class Cat: Animal {
    var runspeed = 10
   override init(name: String) {
        super.init(name: name)
        self.health = 150
    }
    func growl(){
        print("Rawr!")
    }
    func run(){
        print("Running...")
        self.health -= self.runspeed
    }
}


class Cheetah: Cat {
    override init(name: String){
        super.init(name:name)
        self.runspeed = 50
    }
    override func run(){
        if self.health >= self.runspeed {
            print("Running Fast!")
            self.health -= self.runspeed
        }
        else {
            print("Im too tired to run 😿")
        }
    }
    func sleep(){
        print("Sleeping...")
        self.health += 50
        if self.health > 200{
            self.health = 200
        }
    }
}


class Lion: Cat {
    
    override init(name: String){
        super.init(name: name)
        self.health = 200
    }
    override func growl(){
        print("ROAR! I am the king of the jungle!! ")
    }
    
}

let cheetah = Cheetah(name: "the cheetah")
cheetah.run()
cheetah.run()
cheetah.run()
cheetah.run()
cheetah.displayHealth()

print()

let lion = Lion(name: "the lion")
lion.run()
lion.run()
lion.run()
lion.growl()
lion.displayHealth()


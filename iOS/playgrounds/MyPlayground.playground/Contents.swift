//: Playground - noun: a place where people can play

import Cocoa

func flip() -> String {
    let sides = ["heads", "tails"]
    return "Tossing coin...You got a \(sides[Int(arc4random_uniform(2))])!"
}
print(flip())



func multFlip(times: Int) -> Double? {
    var h = 0
    var t = 0
    for _ in 1...times {
        if Int(arc4random_uniform(2)) == 0 {
            h += 1
        }
        else {
            t += 1
        }
    }
    return Double("\(h).\(t)")
}

print(multFlip(times: 20)!)

//: Playground - noun: a place where people can play

import UIKit

var numArr = [Int]()
for i in 1...255 {
    numArr.append(i)
}

func shuffle () {
    for _ in 1...100 {
        let temp = numArr[Int(arc4random_uniform(UInt32(numArr.count)))]
        numArr[Int(arc4random_uniform(UInt32(numArr.count)))] = numArr[Int(arc4random_uniform(UInt32(numArr.count)))]
        numArr[Int(arc4random_uniform(UInt32(numArr.count)))] = temp
    }
}

shuffle()
shuffle()
shuffle()
shuffle()

for i in 0..<numArr.count {
    if numArr[i] == 42 {
        numArr.remove(at: i)
        print("We found the answer to life, the universe, and everything at index \(i)")
    }
}

//print(numArr)

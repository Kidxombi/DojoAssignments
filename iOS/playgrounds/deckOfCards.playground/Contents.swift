//: Playground - noun: a place where people can play

import UIKit

struct Card {
    let value: String
    let suit: String
    let numerical_value: Int
    func show(){
        print(value, "of", suit, ":value", numerical_value)
    }
}

class Deck {
    var cards = [Card]()
    init(){
        self.reset()
    }
    func deal() -> Card? {
        if self.cards.count > 0 {
            return self.cards.remove(at: 0)
        }
        else {
            return nil
        }
    }
    func reset(){
        let values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
        let suits = ["♣️", "♠️", "❤️", "♦️"]
        self.cards = [Card]()
        for suit in suits {
            for i in 0...12 {
                let newCard = Card(value: values[i], suit: suit, numerical_value: i+1)
                self.cards.append(newCard)
            }
        }
    }
    func shuffle(){
        for i in stride(from: self.cards.count-1, to: 0, by: -1){
            let swapCardIndex = Int(arc4random_uniform(UInt32(i)))
            let temp = self.cards[i]
            self.cards[i] = self.cards[swapCardIndex]
            self.cards[swapCardIndex] = temp
        }
    }
    func show(){
        for card in self.cards {
            card.show()
        }
    }
}

class Player {
    var name: String
    var hand: [Card]
    init(name: String){
        self.name = name
        self.hand = [Card]()
    }
    func draw(deck:Deck) -> Card? {
        if let drawnCard = deck.deal() {
            self.hand.append(drawnCard)
            return drawnCard
        }
        else {
            return nil
        }
    }
    func discard(suit: String, value: String) -> Bool {
        for i in 0..<self.hand.count {
            if self.hand[i].suit == suit && self.hand[i].value == value {
                self.hand.remove(at: i)
                return true
            }
        }
        return false
    }
    func show(){
        for card in self.hand {
            card.show()
        }
    }
}

let myDeck = Deck()
//myDeck.show()

myDeck.shuffle()
//myDeck.show()

let joe = Player(name: "Joe")

for _ in 1...5{
    joe.draw(deck: myDeck)
}

joe.show()
joe.discard(suit: "♣️", value: "Ace")
joe.show()

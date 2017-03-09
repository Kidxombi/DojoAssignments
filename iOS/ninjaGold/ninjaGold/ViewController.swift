//
//  ViewController.swift
//  ninjaGold
//
//  Created by Samuel on 3/8/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    var gold = 0
    

    @IBOutlet weak var goldLabel: UILabel!
    @IBOutlet weak var farmLabel: UILabel!
    @IBOutlet weak var caveLabel: UILabel!
    @IBOutlet weak var houseLabel: UILabel!
    @IBOutlet weak var casinoLabel: UILabel!
    
    @IBAction func resetButton(_ sender: UIButton) {
        gold = 0
        goldLabel.text = String(gold)
        casinoLabel.text = ""
        houseLabel.text = ""
        caveLabel.text = ""
        farmLabel.text = ""
    }
    
    
    
    @IBAction func buildingButtonPressed(_ sender: UIButton) {
        
        if sender.tag == 1 {
            let randomGold = Int(arc4random_uniform(UInt32(20))+10)
            
            farmLabel.text = "You got \(randomGold) gold"
            caveLabel.text = ""
            houseLabel.text = ""
            casinoLabel.text = ""
            
            gold += randomGold
            goldLabel.text = String(gold)
        }
        
        if sender.tag == 2 {
            let randomGold = Int(arc4random_uniform(UInt32(10))+5)
            
            caveLabel.text = "You got \(randomGold) gold"
            farmLabel.text = ""
            houseLabel.text = ""
            casinoLabel.text = ""
            
            gold += randomGold
            goldLabel.text = String(gold)
        }
        
        if sender.tag == 3 {
            let randomGold = Int(arc4random_uniform(UInt32(5))+2)
            
            houseLabel.text = "You got \(randomGold) gold"
            caveLabel.text = ""
            farmLabel.text = ""
            casinoLabel.text = ""
            
            gold += randomGold
            goldLabel.text = String(gold)
        }
        
        if sender.tag == 4 {
            let randomGold = Int(arc4random_uniform(UInt32(101))) - 50
            
            casinoLabel.text = "You got \(randomGold) gold"
            houseLabel.text = ""
            farmLabel.text = ""
            caveLabel.text = ""
            
            gold += randomGold
            goldLabel.text = String(gold)
        }
        
        
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}


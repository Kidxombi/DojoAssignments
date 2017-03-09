//
//  ViewController.swift
//  coldCall
//
//  Created by Samuel on 3/8/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
 
    let names = ["Arnold", "Patrick", "Asian Jon", "Black Jon", "White Jon", "Justin", "Mark", "Glen", "Christian", "Adrian", "Jackie"]
    
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var numberLabel: UILabel!
    @IBAction func buttonPressed(_ sender: Any) {
        let randomIndex = Int(arc4random_uniform(UInt32(names.count)))
        nameLabel.text = names[randomIndex]
        let randomNumber = Int(arc4random_uniform(UInt32(5))+1)
        numberLabel.text = String(randomNumber)
        if randomNumber == 1 || randomNumber == 2 {
            numberLabel.textColor = UIColor.red
        }
        else if randomNumber == 3 || randomNumber == 4 {
            numberLabel.textColor = UIColor.orange
        }
        else if randomNumber == 5 {
            numberLabel.textColor = UIColor.green
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


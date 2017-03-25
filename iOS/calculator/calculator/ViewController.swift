//
//  ViewController.swift
//  calculator
//
//  Created by Samuel on 3/9/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    
    @IBOutlet weak var resultLabel: UILabel!
    @IBOutlet weak var outputLabel: UILabel!
    
    var output = String()
    var lastInputWasOperand = false
    
    
    @IBAction func reset(_ sender: UIButton) {
        output = ""
        outputLabel.text = ""
        resultLabel.text = ""
    }
    
    @IBAction func buttonPressed(_ sender: UIButton) {
        if sender.tag == 10 {
            output.append("0")
            lastInputWasOperand = false
        }
        if sender.tag < 10 {
            output.append(String(sender.tag))
            lastInputWasOperand = false
        }
    if !lastInputWasOperand {
        if sender.tag == 11 {
            output.append(" + ")
            lastInputWasOperand = true
        }
        
        if sender.tag == 12 {
            output.append(" - ")
            lastInputWasOperand = true
        }
        
        if sender.tag == 13 {
            output.append(" * ")
            lastInputWasOperand = true
        }
        
        if sender.tag == 14 {
            output.append(" / ")
            lastInputWasOperand = true
        }
   
        if sender.tag == 15 {
            
            let result = NSExpression(format: output).expressionValue(with: nil, context: nil)!
            resultLabel.text = String(describing: result)
        }
        if sender.tag == 0 {
            output.append(".")
            lastInputWasOperand = true
        }
        
    }
        
        reloadUI()
        print(output)
        
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        reloadUI()
        
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    
    func reloadUI(){
        outputLabel.text = output

    }

}

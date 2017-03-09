//
//  ViewController.swift
//  tickTacToe
//
//  Created by Samuel on 3/8/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    var whoTurn = "red"
    var boxStates = [0,0,0,0,0,0,0,0,0]
    
    var redScore = [Int]()
    var blueScore = [Int]()
    
    @IBOutlet weak var winLabel: UILabel!
    
    @IBOutlet weak var box1: UIButton!
    @IBOutlet weak var box2: UIButton!
    @IBOutlet weak var box3: UIButton!
    @IBOutlet weak var box4: UIButton!
    @IBOutlet weak var box5: UIButton!
    @IBOutlet weak var box6: UIButton!
    @IBOutlet weak var box7: UIButton!
    @IBOutlet weak var box8: UIButton!
    @IBOutlet weak var box9: UIButton!

    @IBAction func resetButtonPressed(_ sender: UIButton) {
        reset()
    }
    @IBAction func buttonPressed(_ sender: UIButton) {
        
        
        
        if (whoTurn == "red") {
            if boxStates[sender.tag-1] == 0 {
                sender.backgroundColor = UIColor.red
                redScore.append(sender.tag)
                checkWin()
                whoTurn = "blue"
                boxStates[sender.tag-1] = 1
            }
            
        }
        else {
            if boxStates[sender.tag-1] == 0 {
                sender.backgroundColor = UIColor.blue
                blueScore.append(sender.tag)
                checkWin()
                whoTurn = "red"
                boxStates[sender.tag-1] = 1
            }
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
    func reset(){
        for i in 0..<boxStates.count {
            boxStates[i] = 0
        }
        
        box1.backgroundColor = UIColor.gray
        box2.backgroundColor = UIColor.gray
        box3.backgroundColor = UIColor.gray
        box4.backgroundColor = UIColor.gray
        box5.backgroundColor = UIColor.gray
        box6.backgroundColor = UIColor.gray
        box7.backgroundColor = UIColor.gray
        box8.backgroundColor = UIColor.gray
        box9.backgroundColor = UIColor.gray
        
        redScore.removeAll()
        blueScore.removeAll()
    }
    func checkWin() -> Bool{
        
        if redScore.contains(1) && redScore.contains(2) && redScore.contains(3) || blueScore.contains(1) && blueScore.contains(2) && blueScore.contains(3){
            winLabel.text = "\(whoTurn) Wins!!!"
            reset()
            return true
        }
        
        else if redScore.contains(4) && redScore.contains(5) && redScore.contains(6) || blueScore.contains(4) && blueScore.contains(5) && blueScore.contains(6){
            winLabel.text = "\(whoTurn) Wins!!!"
            reset()
            return true
        }
        
        else if redScore.contains(7) && redScore.contains(8) && redScore.contains(9) || blueScore.contains(7) && blueScore.contains(8) && blueScore.contains(9){
            winLabel.text = "\(whoTurn) Wins!!!"
            reset()
            return true
        }
        
        if redScore.contains(1) && redScore.contains(4) && redScore.contains(7) || blueScore.contains(1) && blueScore.contains(4) && blueScore.contains(7){
            winLabel.text = "\(whoTurn) Wins!!!"
            reset()
            return true
        }
        
        if redScore.contains(2) && redScore.contains(5) && redScore.contains(8) || blueScore.contains(2) && blueScore.contains(5) && blueScore.contains(8){
            winLabel.text = "\(whoTurn) Wins!!!"
            reset()
            return true
        }
        
        if redScore.contains(3) && redScore.contains(6) && redScore.contains(9) || blueScore.contains(3) && blueScore.contains(6) && blueScore.contains(9){
            winLabel.text = "\(whoTurn) Wins!!!"
            reset()
            return true
        }
        
        if redScore.contains(1) && redScore.contains(5) && redScore.contains(9) || blueScore.contains(1) && blueScore.contains(5) && blueScore.contains(9){
            winLabel.text = "\(whoTurn) Wins!!!"
            reset()
            return true
        }
        
        if redScore.contains(3) && redScore.contains(5) && redScore.contains(7) || blueScore.contains(3) && blueScore.contains(5) && blueScore.contains(7){
            winLabel.text = "\(whoTurn) Wins!!!"
            reset()
            return true
        }
        
        
    }


}


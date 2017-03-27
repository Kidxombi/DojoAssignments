//
//  ViewController.swift
//  NSEW
//
//  Created by Samuel on 3/27/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import UIKit

class MainViewController: UIViewController, TheDelegate {
    
    @IBAction func buttonPressed(_ sender: UIButton) {
        
        if sender.tag == 1 {
            performSegue(withIdentifier: "theSegue", sender: "North")
        } else if sender.tag == 2 {
            performSegue(withIdentifier: "theSegue", sender: "East")
        } else if sender.tag == 3 {
            performSegue(withIdentifier: "theSegue", sender: "South")
        } else if sender.tag == 4 {
            performSegue(withIdentifier: "theSegue", sender: "West")
        }
    }
    
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        let dir = sender as! String
        let controller = segue.destination as! OtherViewController
        controller.delegate = self
        if segue.identifier == "theSegue" {
            controller.theDirection = dir
            print(dir)
        }
        
    }
    
    
    func backPressed(by: UIViewController) {
        dismiss(animated: true, completion: nil)
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


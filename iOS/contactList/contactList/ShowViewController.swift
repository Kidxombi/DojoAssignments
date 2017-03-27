//
//  ShowViewController.swift
//  contactList
//
//  Created by Samuel on 3/25/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import UIKit

class ShowViewController: UIViewController {
    
    var delegate: TheDelegate?
    
    
    @IBOutlet weak var numberLabel: UILabel!
    var viewNumber = "none"
    var name = "none"
    
    
    @IBAction func donePressed(_ sender: UIBarButtonItem) {
        
        delegate?.cancelPressed(by: self)
        
        
    }
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.title = name
        numberLabel.text = viewNumber
    }
    
    
}

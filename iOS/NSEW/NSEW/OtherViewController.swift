//
//  OtherViewController.swift
//  NSEW
//
//  Created by Samuel on 3/27/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import UIKit

class OtherViewController: UIViewController {
    
    
   
    @IBOutlet weak var directionLabel: UILabel!
    
    var theDirection: String?
    var delegate: TheDelegate?
    
    @IBAction func backPressed(_ sender: UIButton) {
        delegate?.backPressed(by: self)
        
        
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        
        if let dir = theDirection {
            directionLabel.text = dir
        }
        
        
    }
    
    
}

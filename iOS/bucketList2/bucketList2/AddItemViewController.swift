//
//  AddItemViewController.swift
//  bucketList2
//
//  Created by Samuel on 3/25/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import UIKit



class AddItemViewController: UIViewController {
    
    var delegate: TheDelegate?
    
    var indexOfEdit: Int?
    var textOfEdit: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        if let text = textOfEdit {
            userTextField.text = text
        }
    }
    
    
    
    
    @IBAction func cancelPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelPressed(by: self)
    }
    
    @IBAction func donePressed(_ sender: UIBarButtonItem) {
        
        if let index = indexOfEdit {
            if userTextField.text != "" {
                delegate?.donePressed(by: self, text: userTextField.text!, at: index)
            }
        } else {
            if userTextField.text != "" {
                delegate?.donePressed(by: self, text: userTextField.text!)
            }
        }
        
        
        
    }
    
    @IBOutlet weak var userTextField: UITextField!
    
    
    
    
    
    
    
    
    
}

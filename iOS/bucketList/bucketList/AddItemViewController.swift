//
//  AddItemViewController.swift
//  bucketList
//
//  Created by Samuel on 3/22/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import UIKit

class AddItemViewController: UIViewController {
    
    var delegate: TheDelegate?
    
    var indexOfItemToEdit: Int?
    var textOfItemToEdit: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        if let item = textOfItemToEdit {
            userTextField.text = item
            self.navigationItem.title = "Edit Item"
        }
        
    }

    
    
    
    @IBOutlet weak var userTextField: UITextField!
    
    @IBAction func cancelPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelPressed(by: self)
    }
    
    @IBAction func donePressed(_ sender: UIBarButtonItem) {
        
        if let index = indexOfItemToEdit {
            delegate?.donePressed(by: self, text: userTextField.text!, at: index)
        } else {
            if userTextField.text != "" {
                delegate?.donePressed(by: self, text: userTextField.text!)
            }
        }
        
       
    }
    
    

    
    
    
}

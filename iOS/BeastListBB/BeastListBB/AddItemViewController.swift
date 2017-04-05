//
//  AddItemViewController.swift
//  BeastListBB
//
//  Created by Samuel on 3/30/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import UIKit
import Foundation

class AddItemViewController: UIViewController {
    
    var delegate: TheDelegate?
    var textOfEdit: String?
    var indexOfEdit: Int?
    
    
    
    
    @IBOutlet weak var userTextField: UITextField!
    
    @IBAction func donePressed(_ sender: UIBarButtonItem) {
        if let index = indexOfEdit {
            delegate?.donePressed(by: self, text: userTextField.text!, index: index)
        } else {
            delegate?.donePressed(by: self, text: userTextField.text!)
        }
        
    }
    @IBAction func cancelPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelPressed(by: self)
    }
    
    
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        if let text = textOfEdit {
            userTextField.text = text
        }
    }
    
    
    
    
}

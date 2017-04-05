//
//  AddItemViewController.swift
//  beastList2
//
//  Created by Samuel on 4/1/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import UIKit

class AddItemViewController: UIViewController {
    
    var delegate: TheDelegate?
    var textOfEdit: String?
    var indexOfEdit: Int?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        if let t = textOfEdit {
            userTextField.text = t
        }
    }
    
    
    
    
    @IBOutlet weak var userTextField: UITextField!
    
    @IBAction func cancelPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelPressed(by: self)
    }
    
    @IBAction func donePressed(_ sender: UIBarButtonItem) {
        if userTextField.text != "" {
            if let i = indexOfEdit {
                delegate?.donePressed(by: self, text: userTextField.text!, index: i)
            } else {
                delegate?.donePressed(by: self, text: userTextField.text!)
            }
        }
    }
}

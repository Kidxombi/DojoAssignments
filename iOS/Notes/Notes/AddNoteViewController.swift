//
//  AddNoteViewController.swift
//  Notes
//
//  Created by Samuel on 3/27/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import UIKit
import Foundation

class AddItemViewController: UIViewController {
    
    var delegate: TheDelegate?
    var textOfEdit: String?
    var indexOfEdit: Int?
    
    
    @IBOutlet weak var userTextArea: UITextView!
    
    @IBAction func backPressed(_ sender: UIBarButtonItem) {
        let theDate = Date()
        let formatter = DateFormatter()
        formatter.dateFormat = "d-m-y"
        let result = formatter.string(from: theDate)
        
        if let index = indexOfEdit {
            delegate?.backPressedWithEdit(by: self, text: userTextArea.text, date: result, index: index)
        } else {
            if userTextArea.text != "" {
                delegate?.backPressed(by: self, text: userTextArea.text, date: result)
            }
        }
        
        
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        if let text = textOfEdit {
            userTextArea.text = text
            self.title = "Edit Note"
        }
    }
    
    
    
    
    
}

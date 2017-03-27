//
//  NewContactViewController.swift
//  contactList
//
//  Created by Samuel on 3/25/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import UIKit

class NewContactViewController: UIViewController {
    @IBOutlet weak var firstNameEntry: UITextField!
    @IBOutlet weak var lastNameEntry: UITextField!
    @IBOutlet weak var phoneNumberEntry: UITextField!
    
    var delegate: TheDelegate?
    
    var firstNameOfEdit: String?
    var lastNameOfEdit: String?
    var numberOfEdit: String?
    var indexOfEdit: Int?
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        if let name = firstNameOfEdit {
            firstNameEntry.text = name
            lastNameEntry.text = lastNameOfEdit
            phoneNumberEntry.text = numberOfEdit
        }
    }

    
    
    
    
    
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let nav = segue.destination as! UINavigationController
        let controller = nav.topViewController as! ShowViewController
        controller.name = "\(firstNameEntry.text!) \(lastNameEntry.text!)"
        controller.viewNumber = phoneNumberEntry.text!
        controller.delegate = self.delegate
    }
    
    @IBAction func cancelPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelPressed(by: self)
    }
    @IBAction func savePressed(_ sender: UIBarButtonItem) {
        
        if let i = indexOfEdit {
            delegate?.savePressed(by: self, firstName: firstNameEntry.text!, lastName: lastNameEntry.text!, number: phoneNumberEntry.text!, index: i)
        } else {
            if firstNameEntry.text != "" && lastNameEntry.text != "" && phoneNumberEntry.text != "" {
                delegate?.savePressed(by: self, firstName: firstNameEntry.text!, lastName: lastNameEntry.text!, number: phoneNumberEntry.text!)
            }
        }
        performSegue(withIdentifier: "viewItem", sender: self)
        
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
}

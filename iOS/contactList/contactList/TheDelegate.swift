//
//  TheDelegate.swift
//  contactList
//
//  Created by Samuel on 3/25/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import UIKit

protocol TheDelegate:class {
    func cancelPressed(by: UIViewController)
    func savePressed(by: UIViewController, firstName: String, lastName: String, number: String)
    func savePressed(by: UIViewController, firstName: String, lastName: String, number: String, index: Int) 
}

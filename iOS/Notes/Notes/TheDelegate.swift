//
//  TheDelegate.swift
//  Notes
//
//  Created by Samuel on 3/27/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import UIKit

protocol TheDelegate:class {
    func backPressed(by: UIViewController, text: String, date: String)
    func backPressedWithEdit(by: UIViewController, text: String, date: String, index: Int)
}

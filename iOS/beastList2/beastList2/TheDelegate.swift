//
//  TheDelegate.swift
//  beastList2
//
//  Created by Samuel on 4/1/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import UIKit

protocol TheDelegate: class {
    func cancelPressed(by: UIViewController)
    func donePressed(by: UIViewController, text: String)
    func donePressed(by: UIViewController, text: String, index: Int)
}

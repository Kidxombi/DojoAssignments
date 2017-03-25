//
//  TheDelegate.swift
//  bucketList2
//
//  Created by Samuel on 3/25/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import UIKit



protocol TheDelegate:class {
    func cancelPressed(by: UIViewController)
    func donePressed(by: UIViewController, text: String)
    func donePressed(by: UIViewController, text: String, at: Int)
}

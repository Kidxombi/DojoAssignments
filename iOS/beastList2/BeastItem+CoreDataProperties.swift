//
//  BeastItem+CoreDataProperties.swift
//  beastList2
//
//  Created by Samuel on 4/1/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import CoreData


extension BeastItem {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<BeastItem> {
        return NSFetchRequest<BeastItem>(entityName: "BeastItem")
    }

    @NSManaged public var content: String?
    @NSManaged public var date: NSDate?

}

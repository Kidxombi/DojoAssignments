//
//  BucketItem+CoreDataProperties.swift
//  bucketList
//
//  Created by Samuel on 3/22/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import CoreData


extension BucketItem {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<BucketItem> {
        return NSFetchRequest<BucketItem>(entityName: "BucketItem");
    }

    @NSManaged public var name: String?

}

//
//  BeastedListViewController.swift
//  beastList2
//
//  Created by Samuel on 3/31/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import Foundation
import UIKit

class BeastedListViewController: UITableViewController {
    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    var doneList = [BeastItem]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
   
    
    // How many cells are we going to need?
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return an integer that indicates how many rows (cells) to draw
        return doneList.count
    }
    
    // How should I create each cell?
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Get the UITableViewCell and create/populate it with data then return it
        let cell = tableView.dequeueReusableCell(withIdentifier: "protCell", for: indexPath)
        cell.textLabel?.text = doneList[indexPath.row].content
        cell.detailTextLabel?.text = String(describing: doneList[indexPath.row].date)
        return cell
    }
    
    
    
    
    
}

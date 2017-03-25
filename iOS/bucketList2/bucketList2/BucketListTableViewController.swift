//
//  ViewController.swift
//  bucketList2
//
//  Created by Samuel on 3/25/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import UIKit
import CoreData
import Foundation

class BucketListTableViewController: UITableViewController, TheDelegate {
    
    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    
    
    
    var theList = [BucketItem]()
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        fetchAllItems()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    
    // How many cells are we going to need?
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return an integer that indicates how many rows (cells) to draw
        return theList.count
    }
    
    // How should I create each cell?
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Get the UITableViewCell and create/populate it with data then return it
        let cell = tableView.dequeueReusableCell(withIdentifier: "protCell", for: indexPath)
        cell.textLabel?.text = theList[indexPath.row].name
        return cell
    }
    
    func save() {
        do {
            try managedObjectContext.save()
            fetchAllItems()
            
        } catch {
            print(error)
        }
    }
    
    
    
    func fetchAllItems() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "BucketItem")
        do {
            let result = try managedObjectContext.fetch(request)
            theList = result as! [BucketItem]
            tableView.reloadData()
        } catch {
            print("\(error)")
        }
        
    }

    
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        managedObjectContext.delete(theList[indexPath.row])
        save()
    }
    
    
    
    override func tableView(_ tableView: UITableView, accessoryButtonTappedForRowWith indexPath: IndexPath) {
        performSegue(withIdentifier: "editItem", sender: indexPath)
    }
    
    
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let nav = segue.destination as! UINavigationController
        let addController = nav.topViewController as! AddItemViewController
        addController.delegate = self
        
        if segue.identifier == "editItem" {
            let index = sender as! IndexPath
            addController.indexOfEdit = index.row
            addController.textOfEdit = theList[index.row].name
        }
    }
    
    
    
    func cancelPressed(by: UIViewController) {
        dismiss(animated: true, completion: nil)
    }
    func donePressed(by: UIViewController, text: String) {
        let item = NSEntityDescription.insertNewObject(forEntityName: "BucketItem", into: managedObjectContext) as! BucketItem
        item.name = text
        save()
        dismiss(animated: true, completion: nil)
    }
    func donePressed(by: UIViewController, text: String, at: Int) {
        theList[at].name = text
        save()
        dismiss(animated: true, completion: nil)
    }
    

}


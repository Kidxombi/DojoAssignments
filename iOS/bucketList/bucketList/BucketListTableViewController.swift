//
//  ViewController.swift
//  bucketList
//
//  Created by Samuel on 3/22/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import UIKit
import CoreData
import Foundation

class BucketListTableViewController: UITableViewController, TheDelegate {

    var list = [BucketItem]()
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
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
        return list.count
    }
    
    // How should I create each cell?
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Get the UITableViewCell and create/populate it with data then return it
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        cell.textLabel?.text =   list[indexPath.row].name
        return cell
    }
    
    override func tableView(_ tableView: UITableView, accessoryButtonTappedForRowWith indexPath: IndexPath) {
        performSegue(withIdentifier: "editItem", sender: indexPath)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let nav = segue.destination as! UINavigationController
        let controller = nav.topViewController as! AddItemViewController
        controller.delegate = self
        
        if segue.identifier == "editItem" {
            let indexPath = sender as! IndexPath
            controller.textOfItemToEdit = list[indexPath.row].name!
            controller.indexOfItemToEdit = indexPath.row
        }
        
    }
    
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        managedObjectContext.delete(list[indexPath.row])
        save()
        tableView.reloadData()
        
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
            list = result as! [BucketItem]
            tableView.reloadData()
        } catch {
            print("\(error)")
        }
        
    }
    
    
    // Protocol methods
    func cancelPressed(by: UIViewController) {
        dismiss(animated: true, completion: nil)
    }
    func donePressed(by: UIViewController, text: String) {
        let item = NSEntityDescription.insertNewObject(forEntityName: "BucketItem", into: managedObjectContext) as! BucketItem
        item.name = text
        save()
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
        
    }
    func donePressed(by: UIViewController, text: String, at: Int) {
        list[at].name = text
        save()
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
        
    }

}


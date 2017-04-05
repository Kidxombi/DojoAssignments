//
//  ViewController.swift
//  BeastListBB
//
//  Created by Samuel on 3/30/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import UIKit
import CoreData
import Foundation



class IncBeastListViewController: UITableViewController, TheDelegate {

    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    var incBeastList = [BeastItem]()
    var comBeastList = [BeastItem]()
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        fetchAllItems()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


    
    // How many cells are we going to need?
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return an integer that indicates how many rows (cells) to draw
        return incBeastList.count
    }
    
    // How should I create each cell?
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Get the UITableViewCell and create/populate it with data then return it
        let cell = tableView.dequeueReusableCell(withIdentifier: "protCell1", for: indexPath)
        cell.textLabel?.text = incBeastList[indexPath.row].content
        return cell
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let nav = segue.destination as! UINavigationController
        let controller = nav.topViewController as! AddItemViewController
        controller.delegate = self
        if segue.identifier == "editItem" {
            let index = sender as! IndexPath
            controller.indexOfEdit = index.row
            controller.textOfEdit = incBeastList[index.row].content
        }
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        performSegue(withIdentifier: "editItem", sender: indexPath)
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
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "BeastItem")
        do {
            let result = try managedObjectContext.fetch(request)
            incBeastList = result as! [BeastItem]
            tableView.reloadData()
        } catch {
            print("\(error)")
        }
        
    }
    
    override func tableView(_ tableView: UITableView, accessoryButtonTappedForRowWith indexPath: IndexPath) {
        let temp = NSEntityDescription.insertNewObject(forEntityName: "BeastItem", into: managedObjectContext) as! BeastItem
        temp.content = incBeastList[indexPath.row].content
        managedObjectContext.delete(incBeastList[indexPath.row])
        comBeastList.append(temp)
        save()
    }
    
    
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        managedObjectContext.delete(incBeastList[indexPath.row])
        save()
    }
    
    
    
    
    func cancelPressed(by: UIViewController) {
        dismiss(animated: true, completion: nil)
    }
    func donePressed(by: UIViewController, text: String) {
        let item = NSEntityDescription.insertNewObject(forEntityName: "BeastItem", into: managedObjectContext) as! BeastItem
        item.content = text
        incBeastList.append(item)
        save()
        dismiss(animated: true, completion: nil)
    }
    func donePressed(by: UIViewController, text: String, index: Int) {
        incBeastList[index].content = text
        save()
        dismiss(animated: true, completion: nil)
    }
    
    
}


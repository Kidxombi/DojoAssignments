//
//  ViewController.swift
//  beastList2
//
//  Created by Samuel on 3/31/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import UIKit
import CoreData
import Foundation

class BeastListViewController: UITableViewController, TheDelegate {

    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    var theList = [BeastItem]()
    
    
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
        let cell = tableView.dequeueReusableCell(withIdentifier: "customCell", for: indexPath) as! CustomCell
        cell.cellLabel?.text = theList[indexPath.row].content
        cell.cellButton?.tag = indexPath.row
        return cell
    }
    
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let nav = segue.destination as! UINavigationController
        let controller = nav.topViewController as! AddItemViewController
        controller.delegate = self
        if segue.identifier == "editItem" {
            let i = sender as! IndexPath
            controller.textOfEdit = theList[i.row].content
            controller.indexOfEdit = i.row
        }
    }
    
    
    @IBAction func beastButtonPressed(_ sender: UIButton) {
        let barViewControllers = self.tabBarController?.viewControllers
        let beastedController = barViewControllers?[1] as! BeastedListViewController
        let date = Date()
        let formatter = DateFormatter()
        formatter.dateFormat = "MM-dd-yyyy"
        let result = formatter.string(from: date)
        let index = sender.tag
        
        
        
        
    }
    
    
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        managedObjectContext.delete(theList[indexPath.row])
        save()
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
            theList = result as! [BeastItem]
            tableView.reloadData()
        } catch {
            print("\(error)")
        }
        
    }

    
    
    
    
    
    // Protocal methods
    func cancelPressed(by: UIViewController) {
        dismiss(animated: true, completion: nil)
    }
    func donePressed(by: UIViewController, text: String) {
        let item = NSEntityDescription.insertNewObject(forEntityName: "BeastItem", into: managedObjectContext) as! BeastItem
        item.content = text
        theList.append(item)
        save()
        dismiss(animated: true, completion: nil)
    }
    func donePressed(by: UIViewController, text: String, index: Int) {
        theList[index].content = text
        save()
        dismiss(animated: true, completion: nil)
    }
}


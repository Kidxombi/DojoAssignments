//
//  ViewController.swift
//  contactList
//
//  Created by Samuel on 3/25/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import UIKit
import CoreData
import Foundation

class ContactListTableViewController: UITableViewController, TheDelegate {
    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    var theList = [ContactItem]()
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        fetchAllItems()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    
    // tableView methods
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return an integer that indicates how many rows (cells) to draw
        return theList.count
    }
    

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Get the UITableViewCell and create/populate it with data then return it
        let cell = tableView.dequeueReusableCell(withIdentifier: "protCell", for: indexPath)
        cell.textLabel?.text = "\(theList[indexPath.row].first_name!) \(theList[indexPath.row].last_name!)"
        cell .detailTextLabel?.text = theList[indexPath.row].number
        return cell
    }
    
    
    
    
    
    // Segue Stuff
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        
        
        
        if segue.identifier == "newItem" {
            let nav = segue.destination as! UINavigationController
            let controller = nav.topViewController as! NewContactViewController
            controller.delegate = self
            
        } else if segue.identifier == "viewItem" {
            let nav2 = segue.destination as! UINavigationController
            let controller2 = nav2.topViewController as! ShowViewController
            controller2.delegate = self

            let index = sender as! IndexPath
            controller2.name = "\(theList[index.row].first_name!) \(theList[index.row].last_name!)"
            controller2.viewNumber = theList[index.row].number!
            
        } else if segue.identifier == "editItem" {
            let index = sender as! IndexPath
            let nav = segue.destination as! UINavigationController
            let controller = nav.topViewController as! NewContactViewController
            controller.delegate = self
            
            controller.firstNameOfEdit = theList[index.row].first_name!
            controller.lastNameOfEdit = theList[index.row].last_name!
            controller.numberOfEdit = theList[index.row].number!
            controller.indexOfEdit = index.row
        }
        
    }
    
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        
        let alertController = UIAlertController(title: "Select an action", message: "", preferredStyle: .actionSheet)
        
        let viewButton = UIAlertAction(title: "View", style: .default, handler: {(action)-> Void in
            self.performSegue(withIdentifier: "viewItem", sender: indexPath)
        })
        
        let editButton = UIAlertAction(title: "Edit", style: .default, handler: {(action)->Void in
            self.performSegue(withIdentifier: "editItem", sender: indexPath)
        })
        
        let deleteButton = UIAlertAction(title: "Delete", style: .destructive, handler: {(action)->Void in
            let contact = self.theList[indexPath.row]
            self.managedObjectContext.delete(contact)
            self.save()
        })
        
        let cancelButton = UIAlertAction(title: "Cancel", style: .cancel, handler: {(action)->Void in
            print("cancelButton pressed")
        })
        
        alertController.addAction(viewButton)
        alertController.addAction(editButton)
        alertController.addAction(deleteButton)
        alertController.addAction(cancelButton)
        
        self.navigationController!.present(alertController, animated: true, completion: nil)

    }
    
    
    
    
    // Protocal methods
    func cancelPressed(by: UIViewController) {
        dismiss(animated: true, completion: nil)
    }
    func savePressed(by: UIViewController, firstName: String, lastName: String, number: String) {
        let item = NSEntityDescription.insertNewObject(forEntityName: "ContactItem", into: managedObjectContext) as! ContactItem
        item.first_name = firstName
        item.last_name = lastName
        item.number = number
        save()
    }
    func savePressed(by: UIViewController, firstName: String, lastName: String, number: String, index: Int) {
        theList[index].first_name = firstName
        theList[index].last_name = lastName
        theList[index].number = number
        save()
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
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "ContactItem")
        do {
            let result = try managedObjectContext.fetch(request)
            theList = result as! [ContactItem]
            tableView.reloadData()
        } catch {
            print("\(error)")
        }
        
    }


}


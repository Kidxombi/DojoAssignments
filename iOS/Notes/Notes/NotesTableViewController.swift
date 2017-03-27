//
//  ViewController.swift
//  Notes
//
//  Created by Samuel on 3/27/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import UIKit
import CoreData
import Foundation

class NotesTableViewController: UITableViewController, TheDelegate {

    
   
    
    
    
    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    var theNotes = [NoteItem]()
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        fetchAllItems()
    }
    

    
    
    
    

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let nav = segue.destination as! UINavigationController
        let controller = nav.topViewController as! AddItemViewController
        controller.delegate = self
        
        if segue.identifier == "editItem" {
            let index = sender as! IndexPath
            controller.textOfEdit = theNotes[index.row].content
            controller.indexOfEdit = index.row
        }
    }
    
    
    
    
    
    
    // How many cells are we going to need?
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return an integer that indicates how many rows (cells) to draw
        return theNotes.count
    }
    
    // How should I create each cell?
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Get the UITableViewCell and create/populate it with data then return it
        let cell = tableView.dequeueReusableCell(withIdentifier: "protCell", for: indexPath)
        cell.textLabel?.text = theNotes[indexPath.row].content
        cell.detailTextLabel?.text = theNotes[indexPath.row].date
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
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "NoteItem")
        do {
            let result = try managedObjectContext.fetch(request)
            theNotes = result as! [NoteItem]
            tableView.reloadData()
        } catch {
            print("\(error)")
        }
        
    }

    
    
    // Delete
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        managedObjectContext.delete(theNotes[indexPath.row])
        save()
    }
    
    // Tap to Edit
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        performSegue(withIdentifier: "editItem", sender: indexPath)
    }
    
    
    
    
    // Protocal methods
    func backPressed(by: UIViewController, text: String, date: String) {
        let item = NSEntityDescription.insertNewObject(forEntityName: "NoteItem", into: managedObjectContext) as! NoteItem
        item.content = text
        item.date = date
        save()
        dismiss(animated: true, completion: nil)
    }
    func backPressedWithEdit(by: UIViewController, text: String, date: String, index: Int) {
        print("back with edit triggered")
        theNotes[index].content = text
        theNotes[index].date = date
        let edit = theNotes.remove(at: index)
        print(edit)
        theNotes.insert(edit, at: 0)
        print(theNotes)
        save()
        dismiss(animated: true, completion: nil)
        
        
    }
    
    
    
}


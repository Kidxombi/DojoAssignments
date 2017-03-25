//
//  ViewController.swift
//  beastList
//
//  Created by Samuel on 3/14/17.
//  Copyright © 2017 swift/learn. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {
    
    var tasks = ["something cool", "something else cool", "something kind of cool"]
    
    @IBOutlet weak var tasktextField: UITextField!
    @IBOutlet weak var tableView: UITableView!
    
    @IBAction func beastButtonPressed(_ sender: UIButton) {
        tasks.append(tasktextField.text!)
        tableView.reloadData()
    }
    
    
    
    override func viewDidLoad() {
        // Do any additional setup after loading the view, typically from a nib.
        super.viewDidLoad()
        tableView.dataSource = self
        tableView.delegate = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    // How many cells are we going to need?
    func tableView(_ tableView: UITableView, numberOfRowsInSection section:Int) -> Int {
        // Return an integer that returns how many (cells) rows to draw._
        return tasks.count
    }
    
    // How should i create each cell
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Get the UITableViewCell and create/populate it with data then return it
        let cell = tableView.dequeueReusableCell(withIdentifier: "myCell", for: indexPath)
        cell.textLabel?.text = tasks[indexPath.row]
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        print("Section \(indexPath.section) and Row \(indexPath.row)")
        tasks.remove(at: indexPath.row)
        tableView.reloadData()
    }
}


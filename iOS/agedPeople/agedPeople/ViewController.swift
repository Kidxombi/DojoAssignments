//
//  ViewController.swift
//  agedPeople
//
//  Created by Samuel on 3/14/17.
//  Copyright © 2017 braggeInc. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDataSource {
    let nameList = ["Carl Jung", "Trinity", "Neo", "Shae", "Ryan", "Mr.Zoland", "Asian Jon", "Black Jon", "White Jon", "Patrik", "Justin", "Jackie"]
    @IBOutlet weak var tableView: UITableView!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        tableView.dataSource = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    // How many cells are we going to need?
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return an integer that indicates how many rows (cells) to draw
        return 12
    }
    
    // How should I create each cell?
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath)
        // set text label to the model that is corresponding to the row in array
        cell.textLabel?.text = nameList[indexPath.row]
        // return cell so that Table View knows what to render in each row
        let age = Int(arc4random_uniform(90))+1
        cell.detailTextLabel?.text = "\(age) years old."
        return cell
    }


}


from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')

@app.route('/')
def index():
    friends = mysql.query_db("SELECT * FROM friends")
    return render_template('index.html', all_friends=friends)

@app.route('/create', methods=['POST'])
def create():

    query = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (:first_name, :last_name, :occupation, Now(), Now())"
    data = {'first_name': request.form['first_name'], 'last_name': request.form['last_name'], 'occupation': request.form['occupation']}
    mysql.query_db(query, data)
    # add a friend to the database!
    return redirect('/')

@app.route('/delete/<friend_id>', methods=['POST'])
def delete(friend_id):

    query = "DELETE FROM friends WHERE id=:id"
    data = {'id': friend_id}
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/update/<friend_id>', methods=['POST'])
def update(friend_id):
    return render_template('update.html', id=friend_id)

@app.route('/ulogic/<friend_id>', methods=['POST'])
def ulogic(friend_id):

    query = "UPDATE friends SET first_name=:first_name, last_name=:last_name, occupation=:occupation WHERE id=:id"
    data = {'first_name': request.form['first_name'], 'last_name': request.form['last_name'], 'occupation': request.form['occupation'],  'id': friend_id}
    mysql.query_db(query, data)

    return redirect('/')

app.run(debug=True)

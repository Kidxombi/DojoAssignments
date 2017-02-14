from flask import Flask, render_template, request, redirect, session
from mysqlconnection import MySQLConnector
import re

EMAIL_REGEX = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

app = Flask(__name__)
app.secret_key = "54098adojjc000233-g"
mysql = MySQLConnector(app, 'email_val')

@app.route('/')
def index():
    all_emails = mysql.query_db("SELECT * FROM emails")
    return render_template('index.html', all_emails=all_emails)

@app.route('/validate', methods=['POST'])
def validate():
    e = request.form['e']

    if not EMAIL_REGEX.match(e):
        session['res'] = "<div class='row'><div class='twelve columns bad res-box'><h2>INVALID EMAIL!</h2></div></div>"
    else:
        session['res'] = "<div class='row'><div class='twelve columns good res-box'><h2>The Email you entered ({}) was a valid one! Thanks!</h2></div></div>".format(e)
        query = "INSERT INTO emails (email, created_at, updated_at) VALUES (:email, Now(), Now())"
        data = {'email': e}
        mysql.query_db(query, data)



    return redirect('/')

@app.route('/delete/<email_id>', methods=['POST'])
def delete(email_id):
    query = "DELETE FROM emails WHERE id=:id"
    data = {'id': email_id}
    mysql.query_db(query, data)

    return redirect('/')

app.run(debug=True)

from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
import re
EMAIL_REGEX = r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"


app = Flask(__name__)
app.secret_key = "sdjkfsghfpiwbpc"
mysql = MySQLConnector(app, 'loginDB')

@app.route('/')
def index():
    logged_in = True if len(session) > 0 else False
    return render_template('index.html', logged_in=logged_in)


@app.route('/register')
def register():
    return render_template('register.html')


@app.route('/validate', methods=['POST'])
def validate():

    print "AT LEAST IM MAKING IT TO THE VALIDATE ROUTE!========="

    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    password_confirm = request.form['password_confirm']

    error = 0

    if len(first_name) < 1 or len(last_name) < 1:
        flash('Please Enter a Name')
        error += 1

    elif len(first_name) == 1 or len(last_name) == 1:
        flash('First Name must be at least 2 characters.')
        error += 1

    for char1, char2 in first_name, last_name:
        if not char1.isalpha() or not char2.isaplpha():
            flash('Only letters in your name please.')
            error += 1

    if len(email) < 1:
        flash('You need to enter an email.')
        error += 1
    elif not EMAIL_REGEX.match(email):
        flash('Invalid Email.')
        error += 1

    if password < 1:
        flash('You need to enter a password.')
        error += 1
    elif password < 8:
        flash('Password needs to be at least 8 characters.')
        error += 1

    if password != password_confirm:
        flash('Passwords do not match!')
        error += 1

    if error == 0:
        print('All passed, reader to be put into the database=============')
        return redirect('/')
    else:
        return redirect('/register')











@app.route('/users', methods=['POST'])
def users():



    if request.form['submit'] == "LOGIN":

        their_email = request.form['email']
        my_emails = mysql.query_db('SELECT email FROM users')

        their_password = request.form['password']
        my_passwords = mysql.query_db('SELECT password FROM users')


        for i in range(0,len(my_emails)):
            for email in my_emails[i].values():

                if email == their_email:
                    q = 'SELECT id FROM users WHERE email=:email'
                    d = {'email':their_email}
                    session['current_user_id'] = mysql.query_db(q, d)



                    q = 'SELECT password FROM users WHERE email=:email'
                    d = {'email': their_email}
                    pw_query = mysql.query_db(q, d)



                    for pw in pw_query[0].values():

                        if pw == their_password:
                            flash('Success! You are logged in')
                            return redirect('/')
                        else:
                            flash('Error. Incorrect Password')
                            session.clear()
                            return redirect('/')
                else:
                    flash('Error, User not in database!')
                    return redirect('/register')

    elif request.form['submit'] == "LOGOUT":
        session.clear()
        flash('Successfully logged out!')
        return redirect('/')
















app.run(debug=True)

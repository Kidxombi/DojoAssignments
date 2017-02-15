from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector


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

@app.route('/validate')
def validate():
    flash('At least its getting to validate!')
    print "reg data is making it to validation!"
    return redirect('/')


@app.route('/users', methods=['POST'])
def users():



    if request.form['submit'] == "LOGIN":
        their_email = request.form['email']
        my_emails = mysql.query_db('SELECT email FROM users')
        print "===============", my_emails, "===================="

        their_password = request.form['password']
        my_passwords = mysql.query_db('SELECT password FROM users')
        print "===============", my_passwords, "===================="

        for i in range(0,len(my_emails)):
            for email in my_emails[i].values():

                if email == their_email:
                    q = 'SELECT id FROM users WHERE email=:email'
                    d = {'email':their_email}
                    session['current_user_id'] = mysql.query_db(q, d)

                    print session['current_user_id'] # DEBUG===

                    q = 'SELECT password FROM users WHERE email=:email'
                    d = {'email': their_email}
                    pw_query = mysql.query_db(q, d)

                    print pw_query # DEBUG===

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

from flask import Flask, render_template, request, redirect, session, flash
import re, string

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'([A-Z][a-z])\w')
DATE_REGEX = re.compile(r'[\d\d].+\/+[\d\d].+\/+[\d\d\d\d]...')
app = Flask(__name__)
app.secret_key = "fWahaNbah554"

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/logic', methods=['POST'])
def logic():

    session['e-mail'] = request.form['e-mail']
    session['f-name'] = request.form['f-name']
    session['l-name'] = request.form['l-name']
    session['pw'] = request.form['pw']
    session['cpw'] = request.form['cpw']
    session['b-day'] = request.form['b-day']


    if len(session['e-mail']) < 1:
        flash('You need to enter an email')
    elif not EMAIL_REGEX.match(session['e-mail']):
        flash('Invalid Email Address', )
    else:
        flash('Success!')


    if len(session['f-name']) < 1:
        flash('You have to enter a first name')
    elif any(i.isdigit() for i in session['f-name']):
        flash('Invalid First Name')
    elif not NAME_REGEX.match(session['f-name']):
        flash('Your name needs to start with an upper-case, and contain lower-case characters.')
    else:
        flash('Success!')


    if len(session['l-name']) < 1:
        flash('You need to enter a last name')
    elif any(i.isdigit() for i in session['l-name']):
        flash('Invalid Last Name')
    elif not NAME_REGEX.match(session['l-name']):
        flash('Your name needs to start with an upper-case, and contain lower-case characters.')
    else:
        flash('Success!')


    if len(session['pw']) < 1:
        flash('You need to enter a password')
    elif len(session['pw']) > 1 and len(session['pw']) < 8:
        flash('Your password needs to be at least 8 characters')
    else:
        flash('Success!')


    if len(session['cpw']) < 1:
        flash('You need to confirm your password')
    elif len(session['cpw']) > 1 and len(session['cpw']) < 8:
        flash('Your password needs to be at least 8 characters')
    elif session['cpw'] != session['pw']:
        flash('Your passwords do not match')
    else:
        flash('Success!')

    return redirect('/')



app.run(debug=True)

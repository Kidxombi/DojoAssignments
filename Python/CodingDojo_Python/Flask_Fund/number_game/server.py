from flask import Flask, render_template, request, redirect, session, url_for
import random
app = Flask(__name__)
app.secret_key = "jedi"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/logic', methods=["POST"])
def logic():



    if "num" not in session:
        session['num'] = random.randint(1, 101)

    print "THE RANDOM NUMBER IS: {}".format(session['num']) # DEBUG

    guess = int(request.form['guess'])

    print "THE GUESS IS {}".format(guess)   # DEBUG


    if guess > int(session['num']):
        session['response'] = "Too-High"

    elif guess < int(session['num']):
        session['response'] = "Too-Low"

    else:
        session['response'] = "You-Win"
        session['num'] = random.randint(1, 101)


    return redirect('/')


app.run(debug=True)

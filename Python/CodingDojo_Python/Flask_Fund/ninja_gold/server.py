from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = "jhsipuqwherpiuhwerpwer"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_money', methods=["POST"])
def process_money():

    if "gold" not in session:
        session['gold'] = 0

    if "log" not in session:
        session['log'] = ""

    x = request.form['btn']
    if x == "farm":
        r = random.randint(10, 21)
        session['gold'] = int(session['gold']) + r
        session['log'] += "<span style='color: green'>You went to the Farm and got {} gold!</span><br>".format(r)
    if x == "cave":
        r = random.randint(5, 11)
        session['gold'] = int(session['gold']) + r
        session['log'] += "<span style='color: green'>You went to the Cave and got {} gold!</span><br>".format(r)

    if x == "house":
        r = random.randint(2, 6)
        session['gold'] = int(session['gold']) + r
        session['log'] += "<span style='color: green'>You went to the House and got {} gold!</span><br>".format(r)

    if x == "casino":
        r = random.randint(-50, 51)
        g = "lost" if r < 0 else "got"
        c = "red" if r < 0 else "green"
        session['gold'] = int(session['gold']) + r
        session['log'] += "<span style='color: {}'>You went to the casino and {} {} gold!</span><br>".format(c, g, r)

    if x == "Reset":
        session.clear()


    return redirect('/')





app.run(debug=True)

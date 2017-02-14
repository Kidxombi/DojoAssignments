from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)

app.secret_key = "testing"

@app.route('/')
def index():

    if "counter" not in session:
        session['counter'] = 1
    else:
        session['counter'] += 1

    return render_template('index.html', counter=session['counter'])


@app.route('/do_stuff', methods=['POST'])
def do_stuff():


    if request.form['button'] == 'plus two':
        session['counter'] += 1


    if request.form['button'] == 'reset':
        session['counter'] = 0

    return redirect('/')



app.run(debug=True)

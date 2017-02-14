from flask import Flask, render_template, request, flash, redirect
app = Flask(__name__)
app.secret_key = "gangrulea"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/results', methods=['POST'])
def results():
    if len(request.form['name']) < 1:
        flash("You need to enter a name!")
        return redirect('/')

    if len(request.form['comment']) < 1:
        flash("You need to enter something in the comment box!")
        return redirect('/')

    if len(request.form['comment']) > 120:
        flash("Theres too many letters in the box!")

    return render_template('results.html')

app.run(debug=True)

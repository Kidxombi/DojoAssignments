from django.shortcuts import render, redirect
from random import randint as ri

def index(request):

    if 'log' not in request.session:
        request.session['log'] = ""

    if 'gold' not in request.session:
        request.session['gold'] = 0

    return render(request, 'ninja_gold/index.html')

def process(request):

    if request.GET['button'] == 'farm':

        ranum = ri(10, 21)
        request.session['gold'] += ranum
        request.session['log'] += "You went to the Farm and got {} gold\n".format(ranum)

    elif request.GET['button'] == 'cave':

        ranum = ri(5, 11)
        request.session['gold'] += ranum
        request.session['log'] += "You went to the Cave and got {} gold".format(ranum)

    elif request.GET['button'] == 'house':

        ranum = ri(2, 6)
        request.session['gold'] += ranum
        request.session['log'] += "You went to the House and got {} gold\n".format(ranum)

    elif request.GET['button'] == 'casino':

        ranum = ri(-50, 51)
        x = 'got' if ranum > 0 else 'lost'
        request.session['gold'] += ranum
        request.session['log'] += "You went to the Casino and {} {} gold\n".format(x, ranum)

    elif request.GET['button'] == 'RESET' : request.session.clear()

    return redirect('/ninja-gold/')

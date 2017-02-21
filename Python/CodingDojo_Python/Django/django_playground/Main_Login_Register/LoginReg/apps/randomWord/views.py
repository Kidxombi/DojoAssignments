from django.shortcuts import render, redirect
from random import choice
from string import ascii_uppercase


def index(request):
    if 'count' not in request.session:
        request.session['count'] = 0

    return render(request, 'randomWord/index.html')

def logic(request):
    print "it got to logic"
    if request.method == "GET":
        if request.GET['submit'] == "RESET":
            request.session.clear()
        else:
            request.session['ranword'] = ''.join(choice(ascii_uppercase) for i in range(14))
            request.session['count'] += 1

    return redirect('/random-word/')

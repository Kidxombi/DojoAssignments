from django.shortcuts import render, redirect

def index(request):
    if 'count' not in request.session:
        request.session['count'] = 0

    return render(request, 'survey/index.html')

def process(request):
    if request.method == "POST":

        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['lang'] = request.POST['lang']
        request.session['comments'] = request.POST['comments']
        request.session['count'] += 1
        return redirect('/result')

def result(request):
    return render(request, 'survey/result.html')

from django.shortcuts import render

def index(req):
    return render(req, 'dashboard/index.html')

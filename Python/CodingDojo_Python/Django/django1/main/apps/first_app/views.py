from django.shortcuts import render, HttpResponse
## CONTROLER!!!!
def index(request):
    response = "Hello, I am your first request"
    return render(request, "first_app/index.html", {'res':response})

from django.shortcuts import render, redirect
from .models import Courses

def index(request):
    print request.POST
    courses = Courses.objects.all()
    context = {'courses': courses}
    return render(request, 'courses/index.html', context)

def process(request):
    if request.method == 'POST':

        if request.POST['submit'] == 'Add':
            Courses.objects.create(name=request.POST['name'], description=request.POST['desc'])
            return redirect('/')
        elif request.POST['submit'] == 'REMOVE ALL':
            Courses.objects.all().delete()
            return redirect('/')



def remove(request, id):
    if request.method == 'POST':
        if request.POST['submit'] == 'YES':
            Courses.objects.filter(id=id).delete()
            return redirect('/')
        elif request.POST['submit'] == 'NO':
            return redirect('/')
    else:
        course = Courses.objects.get(id=id)
        context = {'course': course}
        return render(request, 'courses/remove.html', context)

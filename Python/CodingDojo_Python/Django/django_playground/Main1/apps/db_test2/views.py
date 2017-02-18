from django.shortcuts import render, redirect
from .models import Blog, Comment
def index(request):

    context = {
    'blogs' : Blog.objects.all(),
    }
    return render(request, 'db_test2/index.html', context)

def blogs(request):
    if request.method == 'POST':
        if request.POST['submit'] == 'Enter Blog!':
            Blog.objects.create(title=request.POST['title'], blog=request.POST['blog'])
        elif request.POST['submit'] == 'Delete All Blogs!':
            Blog.objects.all().delete()


    return redirect('/')

def comments(request, id):
    blog = Blog.objects.get(id=id)
    Comment.objects.create(comments=request.POST['comment'], blog=blog)
    return redirect('/')

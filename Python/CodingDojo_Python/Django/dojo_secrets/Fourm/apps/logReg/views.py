from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User, Secret
from django.db.models import Count


def index(request):
    context = {
    'users': User.objects.all(),
    }
    return render(request, 'logReg/index.html', context)

def register(request):
    if request.method == 'POST':
        reg_check = User.objects.register(request.POST)
        if not reg_check[0]:
            for err in reg_check[1]:
                messages.error(request, err)
            return redirect('/')
        else:
            messages.success(request, 'Thanks for registering, you are now logged in')
            request.session['current_user_id'] = reg_check[1]
            return redirect('/profile')

def login(request):
    if request.method == 'POST':
        log_check = User.objects.login(request.POST['log-email'], request.POST['log-password'])
        if not log_check[0]:
            for err in log_check[1]:
                messages.error(request, err)
            return redirect('/')
        else:
            request.session['current_user_id'] = log_check[1]
            messages.success(request, 'Welcome back')
            return redirect('/profile')
    else:
        request.session.clear()
        return redirect('/')

def profile(request):
    context = {
    'users': User.objects.all(),
    'user': User.objects.get(id=request.session['current_user_id'])
    }
    return render(request, 'logReg/profile.html', context)

def delete(request, id):
    context = {
    'user': User.objects.get(id=id)
    }
    if request.POST['submit'] == 'yes':
        User.objects.get(id=id).delete()
        request.session.clear()
        return redirect('/')


    return render(request, 'logReg/delete.html', context)

def secrets(request):
    context = {
    'user': User.objects.get(id=request.session['current_user_id']),
    'secrets': Secret.objects.all().annotate(numlikes=Count('likes')),
    }
    return render(request, 'logReg/secrets.html', context)

def manage_secrets(request, id):
    if request.method == 'POST':
        if request.POST['submit'] == 'share secret':
            if len(request.POST['secret']) > 2:
                Secret.objects.create(user=User.objects.get(id=id), content=request.POST['secret'])
            return redirect('/profile/')

        if request.POST['submit'] == 'like':
            x = Secret.objects.get(id=id)
            Secret.objects.like(id, request.session['current_user_id'])
            return redirect('/secrets')

        if request.POST['submit'] == 'delete':
            Secret.objects.get(id=id).delete()
            return redirect('/secrets')

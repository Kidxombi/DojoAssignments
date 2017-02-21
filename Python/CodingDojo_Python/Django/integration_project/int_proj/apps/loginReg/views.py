from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
from django.core.urlresolvers import reverse



def index(request):
    users = User.objects.all()
    context = {
        'users': users
    }
    return render(request, 'loginReg/index.html', context)

def success(request):
    return render(request, 'loginReg/success.html')

def register(request):
    if request.method == 'POST':
        user_check = User.objects.register(request.POST['first_name'], request.POST['last_name'], request.POST['email'], request.POST['password'], request.POST['password_confirm'])

        if user_check == False:
            messages.error(request, 'Invalid Input')
            return redirect('/')
        else:
            messages.success(request, 'Success! Thanks for registering!')
            return redirect('/success')
    else:
        User.objects.all().delete()
        return redirect('/')

def login(request):
    login_check = User.objects.login(request.POST['lemail'], request.POST['lpassword'])
    if login_check == False:
        messages.error(request, 'Login Failed')
        return redirect('/')
    else:
        messages.success(request, 'Success! Thanks for loging in!')
        request.session['current_user'] = login_check['True']
        return redirect('/success')

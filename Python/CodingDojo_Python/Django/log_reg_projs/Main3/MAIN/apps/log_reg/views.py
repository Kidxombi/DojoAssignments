from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages


def index(request):
    return render(request, 'log_reg/index.html')

def register(request):

    register_check = User.objects.register(request.POST['first_name'], request.POST['last_name'], request.POST['email'], request.POST['password'], request.POST['password_confirm'])
    if register_check == False:
        messages.error(request, 'Invalid Registraion Information')
        return redirect('/')
    else:
        messages.success(request, 'Successfull Registration!')
        request.session['current_user'] = register_check['True']
        return redirect('/success/{}'.format(request.session['current_user']))

def login(request):

    login_check = User.objects.login(request.POST['log-email'], request.POST['log-password'])
    if login_check == False:
        messages.error(request, 'Invalid Login Input')
        return redirect('/')
    else:
        messages.success(request, 'Successful Login!')
        request.session['current_user'] = login_check['True']
        return redirect('/success/{}'.format(request.session['current_user']))

def success(request, id):
    context = {
        'user': User.objects.filter(id=id)[0]
    }
    return render(request, 'log_reg/success.html', context)

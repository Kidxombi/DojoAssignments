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

def success(request, id):
    context = {
        'user': User.objects.filter(id=id)[0]
    }
    return render(request, 'loginReg/success.html', context)

def register(request):
    errors = {
        'first':'Invalid First Name:(must be more then two characters and can only contain letters.)',
        'last':'Invalid Last Name:(must be more then two characters and can only contain letters.)',
        'email':'Invalid Email',
        'pwlen':'Invalid Password:(Must contain at least eight characters.)',
        'pwmatch':'Passwords Do Not Match!',
    }
    if request.method == 'POST':
        r = User.objects.register(request.POST)

        if r[0] == False:
            for i in r[1]:
                messages.error(request, errors[i])
            return redirect('/')
        else:
            messages.success(request, 'Thanks for registering!')
            request.session['current_user'] = r[1]
            return redirect('/success/{}'.format(r[1]))
    else:
        User.objects.all().delete()
        return redirect('/')

def login(request):
    errors = {
        'no-email':'No Matching Email',
        'wrong-pw':'Invalid Password'
    }
    if request.POST['submit'] == 'Login':
        l = User.objects.login(request.POST)
        if l[0] == False:
            for i in l[1]:
                messages.error(request, error[i])
            return redirect('/')
        else:
            messages.success(request, 'Success! Thanks for loging in!')
            request.session['current_user'] = l[1]
            return redirect('/success/{}'.format(l[1]))

    elif request.POST['submit'] == 'Logout':
        request.session.clear()
        messages.success(request, 'Successfully logged out')
        return redirect('/')

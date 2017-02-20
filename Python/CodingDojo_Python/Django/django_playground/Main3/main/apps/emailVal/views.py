from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Email
import re

EMAIL_REGEX = re.compile('^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{3}$')

def index(request):
    emails = Email.objects.all()
    context = {
        'emails': emails
    }
    return render(request, 'emailVal/index.html', context)

def process(request):
    if request.method == 'POST':
        if EMAIL_REGEX.match(request.POST['email']):
            Email.objects.create(name=request.POST['email'])
            messages.success(request, 'The email address you entered ({}) is a valid email address. Thank you!'.format(request.POST['email']))
        else:
            messages.error(request, 'Email is not valid!')

    return redirect('/')

def remove(request, id):

    Email.objects.filter(id=id).delete()
    return redirect('/')

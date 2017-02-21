from __future__ import unicode_literals
from django.contrib import messages
from django.db import models
import re, bcrypt

EMAIL_RE = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{3}$')
NAME_RE = re.compile(r'[a-zA-Z]{2,}')

class UserManager(models.Manager):
    # first_name=0 last_name=1 email=2 password=3 password_confirm=4
    def register(self, *args):
        if not NAME_RE.match(args[0]):

            return False
        elif not NAME_RE.match(args[1]):

            return False
        elif not EMAIL_RE.match(args[2]):

            return False
        elif len(args[3]) < 8:

            return False
        elif args[3] != args[4]:

            return False
        else:

            password = args[3].encode()
            pwhash = bcrypt.hashpw(password, bcrypt.gensalt())
            super(UserManager, self).create(first_name=args[0], last_name=args[1], email=args[2], password=pwhash)
            return {'True': User.objects.filter(email=args[2])[0].id }

    def login(self, email, password):
        them = User.objects.filter(email=email)
        if not them:

            return False
        else:
            if not bcrypt.checkpw(password.encode(), them[0].password.encode()):

                return False
            else:
                return {'True': them[0].id }




class User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=45)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

from __future__ import unicode_literals
from django.contrib import messages
from django.db import models
import re, bcrypt

EMAIL_RE = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{3}$')
NAME_RE = re.compile(r'[a-zA-Z]{2,}')




class UserManager(models.Manager):

    def register(self, args):
        errlst = []
        if not NAME_RE.match(args['first_name']):
            errlst.append('first')
        if not NAME_RE.match(args['last_name']):
            errlst.append('last')
        if not EMAIL_RE.match(args['email']):
            errlst.append('email')
        if len(args['password']) < 8:
            errlst.append('pwlen')
        if args['password'] != args['password_confirm']:
            errlst.append('pwmatch')

        if len(errlst) > 0:
            return (False, errlst)

        else:
            password = args['password'].encode()
            pwhash = bcrypt.hashpw(password, bcrypt.gensalt())
            super(UserManager, self).create(first_name=args['first_name'], last_name=args['last_name'], email=args['email'], password=pwhash)
            return ('True', super(UserManager, self).filter(email=args['email'])[0])

    def login(self, args):
        errlst = []
        u = self.filter(email=args['lemail'])
        if not u:
            errlst.append('no-email')
        else:
            if not bcrypt.checkpw(args['lpassword'].encode(), u[0].password.encode()) : errlst.append('wrong-pw')
            if len(errlst) > 0:
                return (False, errlst)
            else:
                return ('True', u[0])





class User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=40)
    password = models.CharField(max_length=255)
    objects = UserManager()

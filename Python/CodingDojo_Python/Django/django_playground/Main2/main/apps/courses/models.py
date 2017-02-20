Coursefrom __future__ import unicode_literals
from django.db import models

class Courses(models.ModelCourse:
    name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Descriptions(models.Model):
    content = models.TextField(1000)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

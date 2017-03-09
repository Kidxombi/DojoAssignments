from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^profile$', views.profile),
    url(r'^delete/(?P<id>\d+)$', views.delete),
    url(r'^secrets$', views.secrets),
    url(r'^manage_secrets/(?P<id>\d+)$', views.manage_secrets),
    url(r'^', views.index),

]

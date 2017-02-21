from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='ninja-index'),
    url(r'^ninjas$', views.ninjas, name='all-ninjas'),
    url(r'^ninjas/(?P<color>\w+)$', views.ninja, name='one-ninja')

]

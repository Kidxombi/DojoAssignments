"""LoginReg URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include


urlpatterns = [
    url(r'^', include('apps.loginReg.urls', namespace='login')),
    url(r'^time-display/', include('apps.timedisplay.urls', namespace='time-display')),
    url(r'^random-word/', include('apps.randomWord.urls', namespace='random-word')),
    url(r'^ninja-gold/', include('apps.ninja_gold.urls', namespace='ninja-gold')),
    url(r'^dis-ninja/', include('apps.dis_ninja.urls', namespace='dis-ninja')),
]

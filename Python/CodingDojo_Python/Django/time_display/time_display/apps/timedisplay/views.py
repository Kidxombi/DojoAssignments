from django.shortcuts import render
import time
def index(request):
    context = {'time': time.strftime("%H:%M:%S"),
                'date': time.strftime("%m:%d:%Y")}
    return render(request, 'timedisplay/index.html', context)
# Create your views here.

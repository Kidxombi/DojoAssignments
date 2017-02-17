from django.shortcuts import render

def index(request):

    return render(request, 'dis_ninja/index.html')

def ninjas(request):

    return render(request, 'dis_ninja/ninjas.html')

def ninja(request, color):

    if color.lower() == 'red':
        img = 'raph.jpg'

    elif color.lower() == 'blue':
        img = 'leo.jpg'

    elif color.lower() == 'orange':
        img = 'mike.jpg'

    elif color.lower() == 'purple':
        img = 'don.jpg'

    else:
        img = 'fox.jpg'

    context = {'color': img}

    return render(request, 'dis_ninja/ninja.html', context)

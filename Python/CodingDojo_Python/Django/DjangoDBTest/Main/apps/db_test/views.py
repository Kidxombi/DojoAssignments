from django.shortcuts import render




def index(request):

    People.objects.create(first_name='Sam', last_name='Bragge')
    people = People.objects.all()
    print people

    return render(request, 'db_test/index.html')

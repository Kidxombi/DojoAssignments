def names():
    students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
     ]
    for name in students:
        print name['first_name'], name['last_name']

def users():
    users = {
     'Students': [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
      ],
     'Instructors': [
         {'first_name' : 'Michael', 'last_name' : 'Choi'},
         {'first_name' : 'Martin', 'last_name' : 'Puryear'}
      ]
     }
    
    for key, value in users.items():
        print key
        count = 0
        for v in value:
            count += 1
            print "{} - {} {} - {}".format(count, v['first_name'], v['last_name'], len(v['first_name'])+len(v['last_name']))
users()

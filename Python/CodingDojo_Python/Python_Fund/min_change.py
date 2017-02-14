def change(cents):

    coins = {'dollar': 0,
             'quarter': 0,
             'dime': 0,
             'nickel': 0,
             'penny': 0}


    while cents > 0:

        if cents % 100 == 0:
            cents -= 100
            coins['dollar'] += 1

        elif cents % 25 == 0:
            cents -= 25
            coins['quarter'] += 1

        elif cents % 10 == 0:
            cents -= 10
            coins['dime'] += 1

        elif cents % 5 == 0:
            cents -= 5
            coins['nickel'] += 1

        elif cents % 5 != 0:
            coins['penny'] += cents % 5
            cents -= cents % 5

    return coins

print change(739)

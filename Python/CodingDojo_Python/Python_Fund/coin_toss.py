import random

def coin_toss():

    heads_count = 0
    tails_count = 0
    c = None

    for toss in range(5001):
        ranum = random.random()
        if round(ranum) == 0:
            c = "It's a tail!"
            tails_count += 1
        else:
            c = "It's a head!"
            heads_count += 1
        print "Attempt #{}: Throwing a coin... {} ... got {} head(s) so far and {} tail(s) so far.".format(toss, c, heads_count, tails_count)
coin_toss()

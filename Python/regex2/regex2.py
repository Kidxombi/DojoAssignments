import re

sentences = []



with open('Python/regex2/sample.txt', 'r') as file:
    regex = r"wife"
    wife_count = 0
    for line in file:
        sentences.append(line.split('.'))
        line = line.split()
        for word in line:
            if re.search(regex, word, re.IGNORECASE):
                wife_count += 1


# for sentence in sentences : print sentence
# print "There are {} orrurences of the word 'wife' in this document".format(wife_count)

def wife_to_unicorn():
    regex = r"wife"
    f = open('Python/regex2/sample.txt', 'r')
    r = f.read()
    new_one = []
    handle = r.split()
    for word in handle:
        if re.search(regex, word, re.IGNORECASE):
            word = "unicorn"
            new_one.append(word)
        else:
            new_one.append(word)
    new_one = " ".join(new_one)
    f.close()
    return new_one

# print wife_to_unicorn()

def all_t_words():
    f = open('Python/regex2/sample.txt', 'r')
    r = f.read()
    words = []
    handle = r.split()
    for word in handle:
        if 't' in word:
            words.append(word)
    return words
    f.close()

# print all_t_words()

def find_punct():
    regex = (r",", r"'", r";")                      # '.' seems to be attached to the letters for some reason :(
    f = open('Python/regex2/sample.txt', 'r')
    r = f.read()
    punct = []
    for l in r:
        for reg in regex:
            if re.search(reg, l):
                punct.append(l)
    return punct

# print find_punct()

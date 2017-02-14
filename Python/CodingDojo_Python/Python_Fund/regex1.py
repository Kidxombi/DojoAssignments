import re


regex = (r"v", r"ss", r"e$", r"b.b", r"b+b", r"b*b", r"aeiou", r"a-z*2")

def get_matching_words(reglog):
    words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress",
             "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]

    matches = []

    for word in words:
        for reg in regex:
            if re.search(reg,word):
        		matches.append(word)
    return matches

print get_matching_words(regex)

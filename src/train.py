def reverse_sentence(sentence):

    words = sentence.split()

    result = []

    for word in words:
        result.append(word[::-1])

    return " ".join(result)


print(reverse_sentence("I like coding!"))

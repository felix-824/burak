# TASK - N
def palindromCheck(word):
   
    return word == word[::-1]

print(palindromCheck("man"))
print(palindromCheck("dad"))


# TASK -M
# def getSquareNumbers(arr):

#     result = []

#     for number in arr:
#         result.append({"number": number, "square": number**2})


#     return result

# print(getSquareNumbers([1, 4, 6]))

# TASK -L
# def reverse_sentence(sentence):

#     words = sentence.split()

#     result = []

#     for word in words:
#         result.append(word[::-1])

#     return " ".join(result)


# print(reverse_sentence("I like coding!"))

# TASK - Q
def hasProperty(obj, prop):

    return prop in obj

print(hasProperty({"name": "Jek"}, "name"))
print(hasProperty({"age": "20"}, "name"))
# TASK - P
# def objectToArray(obj):
#     result = []

#     for key, value in obj.items():
#         result.append([key, value])

#     return result

# print(objectToArray({"a": 4, "b": 30}))


# TASK - O
# def calculateSumOfNumbers(arr):

#     total = 0

#     for item in arr:

#         if isinstance(item, int) and item is not True and item is not False:
#             total += item

#     return total

# print(calculateSumOfNumbers([11, "10", {"son": 9}, True, 21]))


# TASK - N
# def palindromCheck(word):

#     return word == word[::-1]

# print(palindromCheck("man"))
# print(palindromCheck("dad"))


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

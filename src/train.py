# TASK
def findPair(arr, target):

    left = 0
    right = len(arr) - 1

    while left < right:

        current_sum = arr[left] + arr[right]

        if current_sum == target:
            return [left, right]

        elif current_sum < target:
            left += 1

        else:
            right -= 1

    return []


print(findPair([1, 2, 4, 6, 8], 10))


#  TASK
# def longestIncreasing(arr):

#     if len(arr) == 0:
#         return 0

#     current = 1
#     longest = 1

#     for i in range(1, len(arr)):

#         if arr[i] > arr[i - 1]:
#             current += 1
#         else:
#             current = 1

#         if current > longest:
#             longest = current

#     return longest


# print(longestIncreasing([1, 2, 3, 1, 2]))


# TASK
# def extractNumbers(text):

#     result = []
#     current = ""

#     for char in text:

#         if char.isdigit():
#             current += char
#         else:
#             if current != "":
#                 result.append(current)
#                 current = ""

#     if current != "":
#         result.append(current)

#     return result


# print(extractNumbers("ab12cd345e6"))

# TASK
# def compressString(text):
#     result = ""

#     for char in text:
#         if result == "" or result[-1] != char:
#             result += char

#     return result


# print(compressString("THANKSSSSSS"))


# TASK - Z
# def sumEvens(arr):

#     total = 0

#     for number in arr:

#         if number % 2 == 0:
#             total += number

#     return total


# print(sumEvens([4, 6, 7]))


# TASK - Y
# def findIntersection(arr1, arr2):

#     result = []

#     for item in arr1:

#         if item in arr1:

#             if item in arr2:
#                 result.append(item)

#     return result

# print(findIntersection([4, 6, 8], [8, 4, 0]))

# TASK - X
# def countOccurrences(obj, key_name):

#     count = 0

#     for key, value in obj.items():

#         if key == key_name:
#             count += 1

#         if isinstance(value, dict):
#             count += countOccurrences(value, key_name)

#     return count


# print(countOccurrences({"model": "A", "s": {"model": "B"}}, "model"))


# TASK - W
# def chunkArray(arr, size):
#     result = []

#     for i in range(0, len(arr), size):
#         result.append(arr[i : i + size])

#     return result


# print(chunkArray([1, 2, 3, 4, 5], 2))

# TASK - V
# def countChars(text):

#     result = {}

#     for char in text:

#         if char in result:
#             result[char] += 1
#         else:
#             result[char] = 1

#     return result


# print(countChars("helloWorl"))


# TASK - T
# def mergeSortedArrays(arr1, arr2):

#     result = arr1 + arr2

#     result.sort()

#     return result


# print(mergeSortedArrays([5, 1, 7], [9, 3]))

# TASK - S
# def missingNumber(arr):

#     n = len(arr)

#     total_sum = n * (n + 1) // 2

#     current_sum = sum(arr)

#     return total_sum - current_sum


# print(missingNumber([3, 0, 1]))

# TASK - R
# def calculate(expression):

#     parts = expression.split()

#     num1 = int(parts[0])
#     operator = parts[1]
#     num2 = int(parts[2])

#     if operator == "+":

#         return num1 + num2


# print(calculate("5 + 5"))

# TASK - Q
# def hasProperty(obj, prop):

#     return prop in obj

# print(hasProperty({"name": "Jek"}, "name"))
# print(hasProperty({"age": "20"}, "name"))
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

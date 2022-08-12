

# Print hello world
print("hello world")

#Create a float variable
float_var = float(10)
print(float_var)

# Create a string variable
my_string = "This is a string"

# Create a function that asks for your name and prints it 
def greetUser():
    name = input("What is your name? ")

    print(f"Hello my name is {name}")

greetUser()

# Print the result for first 3 characters of the string on a new line
for ch in my_string[:3]:
    print(ch)


#math calc
math_result = ((1 + 5) * 7) + 6
print(math_result)

#Get the length of your variable string above and store it in a new variable
my_string_len = len(my_string)
print(my_string_len)

#Create a Python list of numbers a sort it in reverse order, store the result in a new variable
number_list = [2, 5, 3, 5, 8, 2]

    # extended slice
reversed_list = number_list[::-1]

print(reversed_list)

#Use the same list of numbers and print out all the numbers that are less than a number entered via user input in the console
target = input("Enter a target number: ")

for number in number_list:
    if(number < int(target)):
        print(number)


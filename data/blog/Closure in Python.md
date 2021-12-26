---
title: Closure in Python
date: '2021-12-26'
tags: ['python','Closure']
summary: Basic introduction to closures in python. closure are inside function that remembers values of outside function. even when outside functions are over.
---


<!-- # Closure in Python -->

Python is pretty cool language. we can do crazy thing with it. Closure might be one of them.

```python
def parant_fuction(value):
    new_value = value + 1
    
    def closure():
        print(new_value)
    
    return closure

new_function = parant_fuction(10)

new_function()

# Output:
# 11
```



In python functions are first class citizens. Which mean function can be used as any other variable.

They can be also passed to another function and returned form some function.

```python
def this_function_print_hi():
	print("Hi")

foo = this_function_print_hi
foo()

# Output:
# Hi
```

When we call function all variable of current program are saved in stack and new variable 

are create. this variable can be access by function as long as they are not redefined beacouse they are global to current function. but when function is completed variable decleard inside function is lost (poped from stack memory).

```python
var1 = 10
var2 = 20

def func():
    var2 = 69
    var3 = 30
    print(var1)
    print(var2)
    print(var3)

func()

print("####")
print(var1)
print(var2)

# Output:
# 10
# 69
# 30
# ####
# 10
# 20
```

In above example var1 was displayed because it is global to function. but var2 was reassigned to we didn’t get 20 as output.  after func is over we can not access var3.

```python
var1 = 10
var2 = 20

def func():
    var2 = 69
    var3 = 30
    def display():
        print(var1)
        print(var2)
        print(var3)
    display()

func()

print("####")
print(var1)
print(var2)

# Output:
# 10
# 69
# 30
# ####
# 10
# 20
```

Here we added function inside function. when inside display function is called all three variable are printed. but we still can’t access it outside function `func`

Now remember function are first class citizens in python. than mean we can return display fucntion

```python
var1 = 10
var2 = 20

def func():
    var2 = 69
    var3 = 30

    def display():
        print(var1)
        print(var2)
        print(var3)

    display()
    return display

inside_fn = func()

print("####")
inside_fn()

# Output:
# 10
# 69
# 30
# ####
# 10
# 69
# 30
```

Now first we called display inside func. than we returned it. notice when we are returning it we are not calling it. output we assign returned value to inside_func this  new rename for our display function. when we call it we get all three variables. 

var3 was not destroyed even function func is over.

because we stored its reference in display function and stored display function in inside_function.

These are closure. inside function that remembers values of outside function. even when outside functions are over.

#### Here are some further sources if we want to dive deep:

- [https://en.wikipedia.org/wiki/Closure_(computer_programming)](https://en.wikipedia.org/wiki/Closure_(computer_programming))

- [https://www.youtube.com/watch?v=swU3c34d2NQ](https://www.youtube.com/watch?v=swU3c34d2NQ)
---
title: Brainfuck Interpreter in Python
date: '2022-02-25'
tags: ['python','brainfuck']
summary: Basic introduction to closures in python. closure are inside function that remembers values of outside function. even when outside functions are over.
---


<!-- # Brainfuck Interpreter in Python -->

![Add a heading.jpeg](/static/images/brainfuck_1.jpg)

## Brief about Brainfuck

Created by Urban Müller [brainfuck](https://en.wikipedia.org/wiki/Brainfuck) is an [esoteric programming language](https://en.wikipedia.org/wiki/Esoteric_programming_language). Esoteric programming languages mostly don’t have practical use they are created  for fun to challenge the limit of Programing languages , compilers  and people who try to write programs in it.

### Rules of brainfuck

|     |     |
| --- | --- | ---------------------------------------------------------- |
|     | >   | Increment counter by one (ie move to next block)           |
|     | <   | Decrement counter by one (ie move to previous block)       |
|     | +   | Increment value of current block by one                    |
|     | -   | Decrement value of current block by one                    |
|     | .   | Print char in current block                                |
|     | ,   | Take char input                                            |
|     | [   | If value of current block is zero skip everything till ‘]’ |
|     | ]   | If value of current block is not zero go back till ‘[’     |



basic setup

```python

SIZE = 2**15
arr = [0] * SIZE
ptr = 0

# hello world program in brainfuck
text =   "++++++++++[>+++++++>++++++++++>+++>+<<<<-]"
       + ">++.>+.+++++++..+++.>++.<<+++++++++++++++."
       + ">.+++.------.--------.>+.>."

idx = 0
while idx < len(text):
    # Rules of brainfuck
    idx+=1
``` 

- `>` Increment counter by one (ie move to next block)
```python
    if text[idx] == ">":
        ptr += 1
        ptr = ptr % SIZE
```


- `<` Decrement counter by one (ie move to previous block) 
```python
    elif text[idx] == "<":
        ptr -= 1
        ptr = (ptr + SIZE) % SIZE
```



- `+` Increment value of current block by one    
```python
    elif text[idx] == "+":
        arr[ptr] += 1
        arr[ptr] = arr[ptr] % 255
```



- `-` Decrement value of current block by one  
```python
    elif text[idx] == "-":
        arr[ptr] -= 1
        arr[ptr] = (arr[ptr] + 255) % 255
```



- `.` Print char in current block 
```python
    elif text[idx] == ".":
        print(chr(arr[ptr]), end="")
```



- `,` Take char input 
```python
    elif text[idx] == ",":
        x = input()
        arr[ptr] = x[0]
```



- `[` If value of current block is zero skip everything till ‘]’
```python
    elif text[idx] == "[":
        if arr[ptr] == 0:
            while text[idx] != "]":
                idx += 1
```



- `]` If value of current block is not zero go back till ‘[’ 
```python
    elif text[idx] == "]":
        if arr[ptr] != 0:
            while text[idx] != "[":
                idx -= 1
```
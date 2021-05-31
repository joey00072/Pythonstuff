---
title: Fractal Tree in python
date: '2021-05-28'
tags: ['Fractal Tree','python','pygame','recursion']
images: /static/images/photo_2021-01-17_18-57-11.jpg
summary: Fractal Tree in python
---
![](/static/images/photo_2021-01-17_18-57-11.jpg)


Fractal tree is a beautiful structure created with a simple recursive code.
For this you need a pygame install on your machine.
If not, you can install pygame by running the following line in your terminal/command prompt. 

```
python3 -m pip install pygame
```
create file with name _ftree.py_.<br/>
Let's start with importing the necessary modules. 

```python:ftree.py
import pygame                           #create main window🔲
from pygame.draw import line	        #Line ➖
from math import sin,cos,radians        #some math ➕➖✖️➗
```
Now create some **Constant** and initialize main window

```python:ftree.py

#initialize pygame 🎮
pygame.init()

#Constants
HIGHT,WITDH = 700,800
BLACK =(0,0,0)
WHITE =(255,255,255)
BLUE  =(0,0,255)
RED   =(255,0,0)

RUN = True
turn_angle=0
INIT_POS = (WITDH//2,HIGHT)

#initialize window 🔲
surface = pygame.display.set_mode((WITDH,HIGHT))

```

define event loop for our app



```python:ftree.py
def ftree():
    #we will complete it latter
    pass


while RUN:
    #👇 coloring hole window black at start of ech frame
    surface.fill(BLACK)

    #👇for everything that is happning on window
    for event in pygame.event.get():
        #👇To colse window❌
        if event.type == pygame.QUIT:
            RUN=False

    #👇building 🌲🌳tree for each frame
    ftree(INIT_POS,200,90,turn_angle,9,WHITE,True) 
        
    turn_angle+=0.1   # 🔄 changing angle for that beautiful rotation
    
    pygame.display.update() # 🔀supdating changes on screen

```

Now lets build our fratcal tree

```python:ftree.py

def ftree(pos,length,angle,turn_angle,depth,color,split):
    # pos🗺️📍    : x,y co-ordinate from where we are going to draw line
    # length     : length of each line
    # angle📐    : angle that we are spliting barnches
    # turn_angle : changeing split angle for every call
    # depth      : no of branches 🔢
    # color🎨   : color of each brach
    # split ↔️    : to check if first split has done
    
    # 👇end recursion if maximum no of branches is reached
    if depth==0:
        return
    # 👇 unpacking x,y form pos tuple -> (x,y) 
    x,y=pos

    # 👇 new point for rotated brach 
    new_x= x+ cos(radians(angle))*length
    new_y= y- sin(radians(angle))*length

    # drawing the brach 
    line(surface,color,pos,(int(new_x),int(new_y)))

    # 👇end of new brach as new pos
    new_pos = (new_x,new_y)
    length=0.69*length
    color1=color2=color

    # 👇 Chnageing color of branches only if is first split
    if split:
        color1=BLUE
        color2=RED

    # 👇recursive call to same function
    ftree(new_pos, length,(angle+turn_angle), turn_angle, depth-1, color1,False)
    #                     👆👇changing angle              #👆👇one less branch to draw
    ftree(new_pos, length,(angle-turn_angle), turn_angle, depth-1, color2,False)

```
Done...<br/>

Now run the _ftree.py_ file
```
python3 ftree.py
```

Complete Code on Github

[CODE](https://github.com/joey00072/Fractal-Tree-in-Python)


Don`t forget to ⭐ on github
<br/>

<!-- ![](/static/images/ftree.gif) -->


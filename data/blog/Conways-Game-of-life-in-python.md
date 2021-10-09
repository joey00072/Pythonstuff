---
title: Conways Game of Life in Python
date: '2021-10-06'
tags: ['Game of Life','python','pygame','convolution']
images: /static/images/photo_2021-01-17_18-57-11.jpg
summary: Conways Game of life is by far the most famous cellular automato. It is best example of how many simple thing can work thougher to create someting complex. If almot fells like real life
---
![](/static/images/life.gif)



Conways Game of life is by far the most famous cellular automato. It is best example of how many simple thing can work thougher to create someting complex. If almot fells like real life

## Rules of Life

Conways Game of life  can produce complex structures yet it is based on only 4 simple rules

### Rule 1

Cell with fewer than two live neighbours dies, as if by underpopulation

![Conways Game of Life s1.png](/static/images/Conways_Game_of_Life_s1.png)

### Rule 2

Cell with two or three live neighbours lives on to the next generation.

![Conways Game of Life s2.png](/static/images/Conways_Game_of_Life_s2.png)

### Rule 3

Cell with more than three live neighbours dies, as if by overpopulation.

![Conways Game of Life s3.png](/static/images/Conways_Game_of_Life_s3.png)

### Rule 4

Cell with exactly three live neighbours becomes a live cell, as if by reproduction.

![Conways Game of Life s4.png](/static/images/Conways_Game_of_Life_s4.png)

Let's build this is python

You will need `pygame` . if you don't have it type `pip install pygame` in Termail/CMD 

lets strat with this boiler plate of balck window

```python
import pygame

WHITE = (255,255,255)
BLACK = (0,0,0)
GRAY = (80,80,80)
HIGHT,WIDTH = 600,600
RUN=True

pygame.init()
screen = pygame.display.set_mode((WIDTH,HIGHT))

while RUN:
        screen.fill(BLACK)
        for event in pygame.event.get():
                if event.type == pygame.QUIT:
                        RUN=False
                        pygame.quit()
        pygame.display.update()
```

Now  First lets create grid with variables so that it will be easier to change it letter

add some more constants

```python
size = 100
cell_size = int(WIDTH/size)
```

Suppose we have created 10x10 grid and we chose width of window 600. to fit 10 cell in row and 10 in column each cell have to have size 60x60 px that why we choose  cell size to width/sie

Lets create grid 2d array inilitize grid with random cell on .we will craete init_grid function which will return 2d array of shape (size,size). there are many ways to do this but we will create this 2d array with list comprehension[.](http://comprehension.ad) and random.choice function to get randomly 0,1 

```python
import random #add this to top of file

def init_grid():
	return [[random.choice([0,1]) for _ in range(size)] for _ in range(size)]

grid = init_grid()
```

We have to create background grid lines and function to draw alive cells in it.

```python
def draw_cell(x,y):
	x=x*cell_size
	y=y*cell_size
	pygame.draw.rect(screen,WHITE,(x,y,cell_size,cell_size))

def draw_grid(grid):
	for x in range(size):
		for y in range(size):
			if grid[y][x]==1:
				draw_cell(x,y)

	for i in range(size):
		pygame.draw.line(screen,GRAY,(0,int(HIGHT*(i/size))),(WIDTH,int(HIGHT*(i/size))))
		pygame.draw.line(screen,GRAY,(int(WIDTH*(i/size)),0),(int(WIDTH*(i/size)),HIGHT))
```

Suppose 5,10 cell is 1. thats we have to pass 5,10 to draw cell function. x = x*cell_size will correct x with respect to size of our window. 

First part in draw gird will loop thought over grid and find which cell is alive and call draw_cell function at that point. while last 2 line in draw_gird for drawing vertical and horizontal lines.

At this point your code should look something like this

```python
import pygame
import random

WHITE = (255,255,255)
BLACK = (0,0,0)
GRAY = (125,125,125)
HIGHT,WIDTH = 600,600
size = 20
cell_size = int(WIDTH/size)
RUN=True
pygame.init()

screen = pygame.display.set_mode((WIDTH,HIGHT))

def init_grid():
	return [[random.choice([0,1]) for _ in range(size)] for _ in range(size)]

def draw_cell(x,y):
	x=x*cell_size
	y=y*cell_size
	pygame.draw.rect(screen,WHITE,(x,y,cell_size,cell_size))

def draw_grid(grid):
	for x in range(size):
		for y in range(size):
			if grid[y][x]==1:
				draw_cell(x,y)

	for i in range(size):
		pygame.draw.line(screen,GRAY,(0,int(HIGHT*(i/size))),(WIDTH,int(HIGHT*(i/size))))
		pygame.draw.line(screen,GRAY,(int(WIDTH*(i/size)),0),(int(WIDTH*(i/size)),HIGHT))

grid = init_grid()

while RUN:
        screen.fill(BLACK)
        for event in pygame.event.get():
                if event.type == pygame.QUIT:
                        RUN=False
                        pygame.quit()

        draw_cell(1,1)
        draw_grid(grid)

        pygame.display.update()
```

Now the fun part.

We have update grid based on 4 rules  but we can simplify into 3 rules

1. If no of living neighbor 3 so cell is alive to next genration, since if you have 3 neighbor ether current aliva cell remain alive or dead cell become alive
2. if no of neighour is 2 and cureent cell is alive it will stay alive
3. In any other dies

lets with create funtion to check is cell is alive

```python
def offset(x):
	return (x+size)%size

def is_alive(grid,ox,oy):
	cnt=0
	for i in range(-1,2): # -1, 0, 1
		for j in range(-1,2):
			if i==0 and j==0:
				continue
			x = offset(ox+i)
			y = offset(oy+j)

			if grid[x][y]==1:
				cnt+=1

	if cnt==3:
		return True
	if cnt==2 and grid[ox][oy]==1:
		return True

	return False
```

In is_alive function we will location of cell ox,oy. we with help of two loops we will check all neighbor. Loop have range [-1,0,1] so we have to add ox ,oy to them to check loctions of cell in grid.

since our loop strat with -1 ,-1  when we are cheack 0,0 th cell co-ordinate will be -1,-1 which is outside grid so we offset it -1 to n where n will be size of our gird. offset function will convert position in range [0,size] 

Lastly create New Genration

```python
def next_generation(grid):
	new_grid = [[0 for _ in range(size)] for _ in range(size)]

	for i in range(size):
		for j in range(size):
			if is_alive(grid,i,j):
				new_grid[i][j]=1
			else:
				new_grid[i][j]=0

	return new_grid
```

Here we will create new empty gird and loop over it. and cell should be alive in next generation we well set it to 1.

Now your final code should look something like this

```python
import pygame
import random

WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
GRAY = (80, 80, 80)
HIGHT, WIDTH = 600, 600
size = 100
cell_size = int(WIDTH / size)
RUN = True
pygame.init()

screen = pygame.display.set_mode((WIDTH, HIGHT))

def init_grid():
    return [[random.choice([0, 1]) for _ in range(size)] for _ in range(size)]

def draw_cell(x, y):
    x = x * cell_size
    y = y * cell_size
    pygame.draw.rect(screen, WHITE, (x, y, cell_size, cell_size))

def draw_grid(grid):
    for x in range(size):
        for y in range(size):
            if grid[y][x] == 1:
                draw_cell(x, y)

    for i in range(size):
        pygame.draw.line(screen, GRAY, (0, int(HIGHT * (i / size))), (WIDTH, int(HIGHT * (i / size))))
        pygame.draw.line(screen, GRAY, (int(WIDTH * (i / size)), 0), (int(WIDTH * (i / size)), HIGHT))

def offset(x):
    return (x + size) % size

def is_alive(grid, ox, oy):
    cnt = 0
    for i in range(-1, 2):  # -1, 0, 1
        for j in range(-1, 2):
            if i == 0 and j == 0:
                continue
            x = offset(ox + i)
            y = offset(oy + j)

            if grid[x][y] == 1:
                cnt += 1

    if cnt == 3:
        return True
    if cnt == 2 and grid[ox][oy] == 1:
        return True

    return False

def next_generation(grid):
    new_grid = [[0 for _ in range(size)] for _ in range(size)]

    for i in range(size):
        for j in range(size):
            if is_alive(grid, i, j):
                new_grid[i][j] = 1
            else:
                new_grid[i][j] = 0

    return new_grid

grid = init_grid()

while RUN:
    screen.fill(BLACK)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            RUN = False
            exit()
            pygame.quit()

    grid = next_generation(grid)
    draw_grid(grid)

    pygame.display.update()
```

 We are done. Save your python file. and run it. And watch dot came to life
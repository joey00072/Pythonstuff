---
title: Display and change frame rate in pygame
date: '2021-06-22'
tags: ['game','python','pygame','fps']
images: /static/images/pygame_fps.png
summary: Easy way to display and change frame rate in pygame
---

![](/static/images/pygame_fps.png)


## Show/Change frame rate in pygame
So you are building someting in pygame game 🎮 and wanna show frame rate.
This is so easy with pygame. First we have to init the text rendering.
Then we pygames than get frame rate pygames clock module.Then convert
the frame rate into pygame text and display on screen.

You can also change frame rate with clock module by setting clock.tick.

👾👾👾

```python
import pygame
pygame.init()

screen = pygame.display.set_mode((600,600))


clock = pygame.time.Clock() # init clock
font = pygame.font.SysFont("Sans", 22)
        #init font for text rendering (Font ,Size)


def display_fps():

    fps = str(int(clock.get_fps()))
    #👆 geting string of framerate 
    #str_fps = str<-int<-float_returned by clock.get_fps

    fps = font.render(fps, True, (255,255,255))
    #👆pygame text <-(str🔤,antialias, Color🎨)
    
    screen.blit(fps, (10,10))
    #👆displaying text at loc 10,10 🗺️📍


RUN = True
while RUN:
    screen.fill((0, 0, 0))
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            RUN=False
            pygame.quit()

        
    clock.tick(60) #👈
    #👆setting framerate as 60 
    display_fps()
    #👆add this fn at end so fps will render at end
    pygame.display.update()


```

If want to use it in your own project copy display_fps function
and add at the end of event loop.also dont forget to add font
as font is global variable.

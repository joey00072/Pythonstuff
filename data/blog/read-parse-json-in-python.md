---
title: Read/Parse json in python
date: '2021-06-23'
tags: ['json','python']
images: /static/images/json_read.png
summary: Read/Parse json in python,Converting json into dictionary.
---
![](/static/images/json_read.png)


Whether it if the response from the API, or configuration of text editor you will probably have encountered json file.
json stands Javascript Objct Notaion. Although it was build 
for web and javascipt every langauge support interface with json.
<br/>

## Reading Json file in python
Reading json file is as easy as any other file.

```python

f = open('file.json')
json_text = f.read()
f.close()

print(json_text)
```
Although above methoed is complely valid it is not recomanded.
use context manager instade.

```python

with open('file.json') as f:
    json_text = f.read()

print(json_text)
```
This gives json as a string which is not useful by itself. We need to parse it.

## Pasaring Json in python

Luckily parsing json is very easy in python. Python has inbuilt  module conveniently named json.
Calling its load method will return dict.
Accessing data with key value pair is much convenient.


```python
import json
# sample json str

json_text='{"name":"Joey"}'

json_dict=json.loads(json_text)

print(json_dict)

```

## Creating Json with dict
creatring json is easy to. We have provide dict to dump 
method in json moudle.


```python
import json

json_dict={
            "name":"Joey"
           }

json_text=json.dumps(json_dict)

print(json_text)

# if you want write into file
with open('file.json','w') as f:
	f.write(json_text)
```
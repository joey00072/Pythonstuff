---
title: How to execute a program or call a system/shell command from Python
date: '2021-06-28'
tags: ['os','python','subprocess','system']
images: /static/images/run_shell_from_py4.png
summary: Execute call a system command from Python.execute a other program from Python
---


![](/static/images/run_shell_from_py4.png)

So you need to run a shell command or other file from python. 
This is so easy with python  python was with intension of 
More powerful scripting language like bash. There are 
Many methods to run shell commands. But here we are going to
Discuss only important ones

# Shell command with subprocess Module
Python comes with inbuilt subprocess modules.  While the subprocess module has various functions. We can use it to spawn other process from python (ie. run other programs/ commands).
subprocess module allow to access some system/operating system level operation from 
your python script. We simply pass list for commands to subprocess.run and they  will execute.

![](/static/images/run_shell_from_py.png)
```python
import subprocess

print("⬇️⬇️List current directory⬇️⬇️\n")

#running ls command : note switches ls->dir for windows
subprocess.run(["ls"])

print("\n⬇️⬇️List current directory with additional arguments⬇️⬇️\n")
#running ls command : Not for windows
subprocess.run(["ls",'-al'])

```

In this way we can run, we can run system command from python.
As you already might have guessed we can run python from here too.

![](/static/images/run_shell_from_py2.png)


```python:run_this.py
import subprocess

print("This is will program run another program \n")

# $python3 run_other.py -> ["python3","run_other.py"]
subprocess.run(["python3","run_other.py"])

```

```python:run_other.py

print("Running Other Program..")


```


# Shell command with os Module
This is not recomanded way but way I like to run shell commands.
Python also came with builtin os module with give acces to same os level.
cammands. 

![](/static/images/run_shell_from_py3.png)

```python
import os

print("⬇️⬇️List current directory⬇️⬇️\n")

#running ls command : note switches ls->dir for windows
os.system("ls")

print("\n⬇️⬇️List current directory with additional arguments⬇️⬇️\n")
#running ls command : Not for windows
os.system("ls -al")
```

<br/>


![](/static/images/run_shell_from_py4.png)
```python:run_this.py
import os

print("This is will program run another program \n")

os.system("python3 run_other.py")

```

```python:run_other.py

print("Running Other Program..")


```

Hope,This Helped!❤️


feedback **svc007@yahoo.com**


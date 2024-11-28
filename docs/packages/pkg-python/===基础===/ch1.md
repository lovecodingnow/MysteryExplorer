# 基础语法

## 标识符

1、标识符对 <mark>大小写敏感</mark>

2、标识符由字母、数字、下划线组成,<mark>第一个字符必须</mark>是字母或下划线\_

## 注释

单行注释：以 # 开头，直到行尾

```python
# 这是一个单行注释
```

多行注释：以 ''' 开头，以 ''' 结尾，中间可以换行

```python
'''
这是一个多行注释
可以换行
'''
```

## 缩进

<mark>缩进是 Python 的重要特性</mark>，它决定了代码块的开始和结束！(不用大括号{})

Python 语言使用缩进来表示代码块，缩进的空格数可以是任意的，<mark>但同一个代码块的缩进空格数必须相同</mark>。

:::code-group

```python:line-numbers
if True:
    print("Hello, World!")
    print("还是 Hello, World!!")
else:
    print("Goodbye, World!")
```

```js:line-numbers
if (true) {
    console.log("Hello, World!");
    console.log("还是 Hello, World!!");
} else {
    console.log("Goodbye, World!");
}
```

:::

## 多行语句

使用反斜杠（\）将一行的语句分为多行显示

```python:line-numbers
a = 1 + 2 + 3 + \
    4 + 5 + 6 + \
    7 + 8 + 9
```

在 [], {}, 或 () 中的多行语句，不需要使用反斜杠 \

```python:line-numbers
a = [1, 2, 3,
     4, 5, 6,
     7, 8, 9]
```

## 数据类型

### 数字类型

python中数字有四种类型：整数、布尔型、浮点数和复数。

1. 整数(int)：只有一种int类型，表示为长整型(没有Long int 类型)。
2. 布尔型(bool)：True、False
3. 浮点数(float)：小数(1.2)、科学计数法(5E-5)等。
4. 复数(complex)：实数部分和虚数部分组成,形式为 a + bj，其中 a 是实部，b 是虚部，j 表示虚数单位。

### 字符串类型

1. Python 中单引号 ' 和双引号 " 使用完全相同
2. 使用三引号('''或""")可以指定一个多行字符串
3. 字符串是不可变的，但可以通过切片操作来修改字符串
4. 字符串的截取的语法格式如下：变量[头下标:尾下标]<mark>注意输出的结构不包含尾下标</mark>
5. 索引值以 0 为开始值，-1 为从末尾的开始位置。
6. 字符串的加号（+）是字符串的连接符，星号（*）是重复操作。

:::code-group

```python:line-numbers
str = 'MysteryExplorer'
print(str)  # 输出字符串
print(str[0:-1])  # 输出第一个到倒数第一个的所有字符(不包括最后一个字符)
print(str[0])  # 输出字符串第一个字符
print(str[2:5])  # 输出从第三个开始到第五个的字符(没有第五个字符)
print(str[2:])  # 输出从第三个开始的后的所有字符
print(str * 2)  # 输出字符串两次
print(str + "TEST")  # 连接字符串
```

```输出结果
# 输出结果：
MysteryExplore
M
ste
steryExplorer
MysteryExplorerMysteryExplorer
MysteryExplorerTEST
```

:::

### 列表类型

点击下面链接，跳转进入对应章节：

[列表函数&方法](./ch2.md)

### 元组类型

### 字典类型

### 集合类型

## import与from...import

在 python 用 import 或者 from...import 来导入相应的模块。

将整个模块导入： import 模块名

从某个模块中导入某个函数： from 模块名 import 函数名

从某个模块中导入多个函数： from 模块名 import 函数名1,函数名2,...

将某个模块中的全部函数导入： from 模块名 import *

:::warning
import 模块名 和 from 模块名 import * 是有区别的！
:::code-group

```python:line-numbers
import math
print(math.pi)  # 使用模块名.属性的方式调用
#优点:
# 1.避免了名字冲突。
# 2.明确地指出了哪些函数或变量来自哪个模块，有助于代码的可读性和维护性。
#缺点：
#需要额外键入模块名，有时候会使得代码看起来稍微冗长一些。
```

```python:line-numbers
from math import *
print(pi)  # 直接使用属性名调用
#优点：
# 1.代码更简洁，直接使用属性名即可访问。
#缺点：
# 1.可能会导致名字冲突，特别是当你从多个模块中导入所有内容时，不同模块可能有相同名称的对象。
# 2.可能会降低代码的可读性，因为你不知道这些函数或变量来自哪个模块。
# 3.可能会降低代码的可维护性，因为你不知道这些函数或变量来自哪个模块。
# !个人不建议使用！
```

:::

:::code-group

```python:line-numbers
import math
print(math.pi)
from math import pi
print(pi)
from math import pi, e
print(pi)
print(e)
from math import *
print(pi)
print(e)
```

```输出结果
3.141592653589793
3.141592653589793
3.141592653589793
2.718281828459045
3.141592653589793
2.718281828459045
```

:::

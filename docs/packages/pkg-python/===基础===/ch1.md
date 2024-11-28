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

1. 列表中每个值都有对应的位置值，称之为索引，第一个索引是 0，第二个索引是 1，依此类推(即从0开始，到列表长度减1)
2. 列表的索引值可以是负数，从-1开始，到-n，依次递减
3. 列表可以进行截取、组合等操作

:::code-group

```python:line-numbers [输入.py]
a = [1, 2, 3, 4, 5]
print(a[0])
print(a[-1])
print(a[1:3])
print(a[::2])
print(a[::-1])
```

```json [输出.vscode]
1
5
[2, 3]
[1, 3, 5]
[5, 4, 3, 2, 1]
```

:::

### 元组类型

1. Python 的元组与列表类似，不同之处在于元组的元素不能修改。
2. 元组使用小括号()，列表使用方括号[]。
3. 元组中的元素可以是任何类型，包括数字、字符串、列表等。
4. 元组中的元素不能修改，但是元组可以被删除。
5. 元组中的元素值是不允许删除的，但我们可以使用del语句来删除整个元组

:::tip
元组中<mark>只包含一个元素时，需要在元素后面添加逗号 "," </mark> 否则括号会被当作运算符使用：
:::code-group

```py:line-numbers [输入.py]

tuple = ('tuple')
print(type(tuple))

tuple = ('tuple',)
print(type(tuple))

```

```py [输出.vscode]
<class 'str'> # 不加逗号时类型为整型
<class 'tuple'> # 加上逗号时类型为元组
```

:::

### 字典类型

1. 字典是另一种可变容器模型，且可存储任意类型对象。
2. 字典的键值对是键-值对，键是唯一的，值可以重复。
3. 字典的每个键值对用冒号 : 分割，每个对之间用逗号(,)分割，整个字典包括在花括号 {} 中
4. 字典的键必须是不可变对象，如字符串、数字、元组，但可以是列表、字典等可变对象。
5. 可以使用{}来创建一个字典，也可以使用dict()函数来创建一个字典。

:::code-group

```py:line-numbers [输入.py]
# 使用大括号{} 来创建空字典
dict1 = {'name': '学海探秘', 'message': '让我们共同进步！'}
print(dict1['name'])
print(dict1)

# 使用dict() 函数来创建空字典
dict2 = dict([('name', '学海探秘'), ('message', '让我们共同进步！')])
print(dict2['name'])
print(dict2)
```

```js [输出.vscode]
学海探秘
{'name': '学海探秘', 'message': '让我们共同进步！'}
学海探秘
{'name': '学海探秘', 'message': '让我们共同进步！'}
```

:::

6. 字典的键值对可以修改，但字典中的键不能修改。
7. 字典可以删除一对键值对，也可以删除整个字典。

:::code-group

```py:line-numbers [输入.py]
dict1 = {'name': '学海探秘', 'message': '让我们共同进步！','age':21}
print(dict1)
dict1['name'] = 'Python' # 修改键值对
dict1['message'] = '从0开始的Python学习生活' # 修改键值对
print(dict1)

# 删除键值对
del dict1['name']  # 删除一对键值对
print(dict1)
dict1.clear()  # 清空字典
print(dict1)
del dict1  # 删除整个字典
```

```js [输出.vscode]
{'name': '学海探秘', 'message': '让我们共同进步！', 'age': 21}
{'name': 'Python', 'message': '从0开始的Python学习生活', 'age': 21}
{'message': '从0开始的Python学习生活', 'age': 21}
{}
```

:::

:::tip

1. 不允许同一个键出现两次(多次出现会覆盖前面的键值)，但键可以重复。
2. 值可以是任何数据类型(包括用户定义的对象)

:::code-group

```py:line-numbers [输入.py]
dict1 = {'name': '学海探秘','message': '让我们共同进步！','age':21,'name': {'name': 'Python','code':200}}
print(dict1)
```

```js [输出.vscode]
{'name': {'name': 'Python', 'code': 200}, 'message': '让我们共同进步！', 'age': 21}
```

:::

### 集合类型

集合是一个无序的不重复元素序列。

1. 集合元素是唯一的，不重复，且不可变。
2. 集合中的元素可以是任何类型，包括数字、字符串、列表等。
3. 可以使用大括号{}创建集合,或者也可以使用set() 函数创建集合。
4. 创建一个空集用set()，创建一个空字典用{}。

:::code-group

```py:line-numbers [输入.py]
# 创建集合
set1 = {1, 2, 3, 4, 5}
print(set1)
set2 = set([1, 2, 3, 4, 5])
print(set2)
print(1 in set1)
print(6 in set1)
```

```js:line-numbers [输出.vscode]
{1, 2, 3, 4, 5}
{1, 2, 3, 4, 5}
True
False
```

:::

5. 集合可以进行运算，如并集、交集、差集等。

:::code-group

```py:line-numbers [输入.py]
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}
print(set1 | set2)# 并集
print(set1 & set2)# 交集
print(set1 - set2)# 差集
print(set1 ^ set2)# 并集减去交集
print(set2.issubset(set1))# 判断是否为子集
print(set2.issuperset(set1))# 判断是否为超集
print(set2.isdisjoint(set1))# 判断是否为空集
print(set2.symmetric_difference(set1))# 并集减去交集

```

```js [输出.vscode]
{1, 2, 3, 4, 5, 6, 7, 8}
{4, 5}
{1, 2, 3}
{1, 2, 3, 6, 7, 8}
False
False
False
{1, 2, 3, 6, 7, 8}
```

:::

6. 其他的集合基本操作

:::code-group

```py:line-numbers [输入.py]
set1 = {1, 2, 3, 4, 5}

set1.add(6)# 添加元素
print(set1)

set1.remove(6)# 删除元素
print(set1)

set1.discard(6)# 删除元素，如果元素不存在，则不报错
print(set1)

set1.pop()# 弹出一个元素
print(set1)

set1.update([6,7])# 添加多个元素
print(set1)

set1.clear()# 清空集合
print(set1)

print(6 in set1)# 判断元素是否在集合中
```

```js [输出.vscode]
{1, 2, 3, 4, 5, 6}
{1, 2, 3, 4, 5}
{1, 2, 3, 4, 5}
{2, 3, 4, 5}
{2, 3, 4, 5, 6, 7}
set()
False
```

:::

## import与from...import

在 python 用 import 或者 from...import 来导入相应的模块。

将整个模块导入： import 模块名

从某个模块中导入某个函数： from 模块名 import 函数名

从某个模块中导入多个函数： from 模块名 import 函数名1,函数名2,...

将某个模块中的全部函数导入： from 模块名 import *

:::warning
import 模块名 和 from 模块名 import * 是有区别的！
:::code-group

```python:line-numbers [.py]
import math
print(math.pi)  # 使用模块名.属性的方式调用
#优点:
# 1.避免了名字冲突。
# 2.明确地指出了哪些函数或变量来自哪个模块，有助于代码的可读性和维护性。
#缺点：
#需要额外键入模块名，有时候会使得代码看起来稍微冗长一些。
```

```python:line-numbers [.py]
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

```python:line-numbers [输入.py]
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

```json [输出结果.vscode]
3.141592653589793
3.141592653589793
3.141592653589793
2.718281828459045
3.141592653589793
2.718281828459045
```

:::

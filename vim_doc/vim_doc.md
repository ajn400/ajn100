# Vim实践
## 第一天
### ctrl+]
> jump to a subject under the cursor
> 跳转光标处项目
### ctrl+o
> jump back(repeat to go further back)
> 重复执行以打开最早的文件
***
### **[cheat sheet](https://vim.rtorr.com/lang/zh_tw)**
***
### :u    
> 复原
### ：U
> 复原上次变更的行
### :h[elp]
> ideavim打开帮助面
## 第二天（移动光标）
### :w
> 向前移动到下一个单词的词首
### :b
> 向后移动到上一个单词的词首
### :e
> 向前移动到下一个单词的词尾
### ：ge
> 前后移动到上一个单词的词尾
```text
// 测试代码
This is-a line , with special/sperated/words (and some more).
```
> <strong>gE,B,W,E的移动会有不同，试试看就知道了</strong>
### 第三天（移动光标）
### :0
> 移动到行首
### :$
> 移动到行尾
### ctrl+g
> 获取当前光标的位置<br>例如`vim_doc/vim_doc.mdline 38 of 39 --95%-- col 17`
##### <i>vim命令也太多了，之后先把常用的给熟悉了</i>
[<strong>vim命令太多？先记住这些常用的吧</strong>](https://blog.csdn.net/afei__/article/details/82655537)
### 
|  命令   | 说明  |
|  ----  | ----  |
| i  |编辑模式 |
| Esc  | 推出编辑模式 |
| --- | --- |
| h | 左移光标 |
| j | 下移光标 |
| k | 上移光标 |
| l | 右移光标 |
| 0 | 移动到行首 |
| $ | 移动到行尾 |
|% | 移动到另一个'('或者')'中 |
<i>试一试</i>
```text
test(test)ning666
```
| 命令 | 说明|
| --- | --- |
| gg | 跳转到第一行|
| G | 跳转到最后一行|
| [n]G | 跳转到指定行|
| CTRL+b | 向后翻一页|
|  CTRL+f | 向前翻一页|
|x/del|删除单个字符|
|dd|删除一行|
|[n]dd|删除光标后n行|
|D/d$|删除光标至行尾所有字符|
|d0|删除光标至行首所有字符|
| p |粘贴到光标后|
| P |粘贴到光标前|
| yy | 复制一行|
| [n]yy | 复制n行|
| u |  撤销|
| CTRL+ r |反撤销|
| sp| 横向分屏|
|vsp| 纵向分屏|
|Ctrl+w |分屏间切换|
|q |退出|
| wq |保存并退出|
| q!| 不保存退出|


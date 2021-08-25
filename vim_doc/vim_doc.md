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

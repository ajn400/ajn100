//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
//
// 有效字符串需满足：
//
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//
//
//
//
// 示例 1：
//
//
//输入：s = "()"
//输出：true
//
//
// 示例 2：
//
//
//输入：s = "()[]{}"
//输出：true
//
//
// 示例 3：
//
//
//输入：s = "(]"
//输出：false
//
//
// 示例 4：
//
//
//输入：s = "([)]"
//输出：false
//
//
// 示例 5：
//
//
//输入：s = "{[]}"
//输出：true
//
//
//
// 提示：
//
//
// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成
//
// Related Topics 栈 字符串
// 👍 2551 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//     // 需要用一个栈，我们开始遍历输入字符串，如果当前字符为左半边括号时，则将其压入栈中，如果遇到右半边括号时，
//     // 若此时栈为空，则直接返回false，如不为空，则取出栈顶元素，若为对应的左半边括号，则继续循环，反之返回false，
//     s = s.split('');
//     let sl = s.length;
//     if (sl % 2) return false;
//     let map = new Map([[')', '('], [']', '['], ['}', '{']]);
//     let stack = [];
//     for(let i of s){
//         if (map.get(i)) {
//             if (stack[stack.length - 1] !== map.get(i)) return false;
//             else stack.pop();
//         } else {
//             stack.push(i);
//         }
//     }
//     return !stack.length;
//
// };

const obj={}
console.log(obj?.name?.name)

// console.log("2",isValid("[()]"))
// console.log("3",isValid("()"))



//leetcode submit region end(Prohibit modification and deletion)

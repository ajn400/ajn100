//罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
//
//
//字符          数值
//I             1
//V             5
//X             10
//L             50
//C             100
//D             500
//M             1000
//
// 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做 XXVII, 即为 XX + V + I
//I 。
//
// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5
// 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
//
//
// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
//
//
// 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
//
//
//
// 示例 1:
//
//
//输入: "III"
//输出: 3
//
// 示例 2:
//
//
//输入: "IV"
//输出: 4
//
// 示例 3:
//
//
//输入: "IX"
//输出: 9
//
// 示例 4:
//
//
//输入: "LVIII"
//输出: 58
//解释: L = 50, V= 5, III = 3.
//
//
// 示例 5:
//
//
//输入: "MCMXCIV"
//输出: 1994
//解释: M = 1000, CM = 900, XC = 90, IV = 4.
//
//
//
// 提示：
//
//
// 1 <= s.length <= 15
// s 仅含字符 ('I', 'V', 'X', 'L', 'C', 'D', 'M')
// 题目数据保证 s 是一个有效的罗马数字，且表示整数在范围 [1, 3999] 内
// 题目所给测试用例皆符合罗马数字书写规则，不会出现跨位等情况。
// IL 和 IM 这样的例子并不符合题目要求，49 应该写作 XLIX，999 应该写作 CMXCIX 。
// 关于罗马数字的详尽书写规则，可以参考 罗马数字 - Mathematics 。
//
// Related Topics 哈希表 数学 字符串
// 👍 1439 👎 0

//I             1
//V             5
//X             10
//L             50
//C             100
//D             500
//M             1000
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt =function (s) {
    let sum = 0;
    let preNum = getValue(s[0]);
    for(let i = 1;i < s.length; i++) {
        let num = getValue(s[i]);
        if(preNum < num) {
            sum -= preNum;
        } else {
            sum += preNum;
        }
        preNum = num;
    }
    sum += preNum;
    return sum;


}
function getValue(ch) {
    switch(ch) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}


// var romanToInt = function(inputValue) {
//     var num = '', i = 0, n = 0;
//
//     while (inputValue.charAt(0) == ' ') {inputValue = inputValue.substr(1)};
//     if (inputValue.indexOf(' ') != -1) {inputValue = inputValue.substr(0, inputValue.indexOf(' '))}
//
//     if (inputValue == '') {
//         alert('No data was input');
//         return '';
//     }
//     else {
//         if (isNaN(inputValue)) {
//             num = inputValue;
//             if (num == num.toLowerCase()) {
//                 i = num.indexOf('u'); if (i != -1) {num = num.substr(0, i) + 'v' + num.substr(i + 1, num.length - i)};
//                 if (num.substr(num.length - 2, 2) == 'ij') {num = num.substr(0, num.length - 2) + 'ii'};
//             }
//             n = evalRoman(num);
//             if (n == -1) {
//                 msg = '';
//             }
//             else {
//                 msg = n;
//             }
//         }
//         else {
//             n = Math.round(parseFloat(inputValue));
//             if (n < 1 || n > 4999) {
//                 alert('输入必须在1 到 4999 之间.');
//                 return '';
//             }
//             else {
//                 if (n != parseFloat(inputValue)) {alert(inputValue + ' will be rounded to ' + n)};
//                 msg = converts(n);
//             }
//         }
//     }
//     return msg;
// };
//
//
// function evalRoman(num) {
//     var i = 0, h = 0, n, t = 0, u = 0;
//
//     num = num.toUpperCase();
//     while (num.charAt(i) == 'M') {i ++};
//     n = i * 1000;
//
//     if (num.substr(i, 2) == 'CM') {h = 9; i += 2}
//     else if (num.substr(i, 1) == 'D') {h = 5; i ++}
//     else if (num.substr(i, 2) == 'CD') {h = 4; i += 2};
//     if (h == 0 || h == 5) {while (num.charAt(i) == 'C') {h ++; i ++}};
//     n += h * 100;
//
//     if (num.substr(i, 2) == 'XC') {t = 9; i += 2}
//     else if (num.substr(i, 1) == 'L') {t = 5; i ++}
//     else if (num.substr(i, 2) == 'XL') {t = 4; i += 2};
//     if (t == 0 || t == 5) {while (num.charAt(i) == 'X') {t ++; i ++}};
//     n += t * 10;
//
//     if (num.substr(i, 2) == 'IX') {u = 9; i += 2}
//     else if (num.substr(i, 1) == 'V') {u = 5; i ++}
//     else if (num.substr(i, 2) == 'IV') {u = 4; i += 2};
//     if (u == 0 || u == 5) {while (num.charAt(i) == 'I') {u ++; i ++}};
//     n += u;
//
//     if (!((num == convert1000s(n) + convert100s(n) + convert10s(n) + convert1s(n))
//         || (num == convert1000s(n) + convert100s(n) + convert10s(n) + convert1a(n))
//         || (num == convert1000s(n) + convert100s(n) + convert10a(n) + convert1s(n))
//         || (num == convert1000s(n) + convert100s(n) + convert10a(n) + convert1a(n))
//         || (num == convert1000s(n) + convert100a(n) + convert10s(n) + convert1s(n))
//         || (num == convert1000s(n) + convert100a(n) + convert10s(n) + convert1a(n))
//         || (num == convert1000s(n) + convert100a(n) + convert10a(n) + convert1s(n))
//         || (num == convert1000s(n) + convert100a(n) + convert10a(n) + convert1a(n)))) {n = -1}
//
//     return(n);
// }
//
// function converts(n) {
//     return (convert1000s(n) + convert100s(n) + convert10s(n) + convert1s(n))
// }
//
// function convert1000s(n) {
//     return ('MMMM'.substr(0, (Math.floor(n / 1000))));
// }
//
// function convert100s(h) {
//     var m = '', h = Math.floor((h % 1000) / 100);
//     if (h == 9) {m = 'CM'}
//     else if (h > 4) {m = 'DCCC'.substr(0, h - 4)}
//     else if (h == 4) {m = 'CD'}
//     else {m = 'CCC'.substr(0, h)};
//     return m;
// }
//
// function convert100a(h) {
//     var m = '', h = Math.floor((h % 1000) / 100);
//     if (h > 4) {m = 'DCCCC'.substr(0, h - 4)}
//     else {m = 'CCCC'.substr(0, h)};
//     return m;
// }
//
// function convert10s(t) {
//     var m = '', t = Math.floor((t % 100) / 10);
//     if (t == 9) {m = 'XC'}
//     else if (t > 4) {m = 'LXXX'.substr(0, t - 4)}
//     else if (t == 4) {m = 'XL'}
//     else {m = 'XXX'.substr(0, t)};
//     return m;
// }
//
// function convert10a(t) {
//     var m = '', t = Math.floor((t % 100) / 10);
//     if (t > 4) {m = 'LXXXX'.substr(0, t - 4)}
//     else {m = 'XXXX'.substr(0, t)};
//     return m;
// }
//
// function convert1s(u) {
//     var m = '', u = u % 10;
//     if (u == 9) {m = 'IX'}
//     else if (u > 4) {m = 'VIII'.substr(0, u - 4)}
//     else if (u == 4) {m = 'IV'}
//     else {m = 'III'.substr(0, u)};
//     return m;
// }
//
// function convert1a(u) {
//     var m = '', u = u % 10;
//     if (u > 4) {m = 'VIIII'.substr(0, u - 4)}
//     else {m = 'IIII'.substr(0, u)};
//     return m;
// }

//leetcode submit region end(Prohibit modification and deletion)

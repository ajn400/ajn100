// assert断言测试
const errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number += 1) {
    console.log('the # is ' + number);
    // console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});
    // 或者使用 ES2015 对象简写:
    console.assert(number % 2 === 0, {number, errorMsg});
}
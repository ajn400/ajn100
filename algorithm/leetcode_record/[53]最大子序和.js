//给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
//
//
//
// 示例 1：
//
//
//输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
//输出：6
//解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
//
//
// 示例 2：
//
//
//输入：nums = [1]
//输出：1
//
//
// 示例 3：
//
//
//输入：nums = [0]
//输出：0
//
//
// 示例 4：
//
//
//输入：nums = [-1]
//输出：-1
//
//
// 示例 5：
//
//
//输入：nums = [-100000]
//输出：-100000
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105
//
//
//
//
// 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
// Related Topics 数组 分治 动态规划
// 👍 3604 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
//    1 -1 2 3 -4 5
//爆搜,蠢笨


    let max=nums[0]

    if(nums.length==1){
        return max
    }

    //nums.length>1;

    let end,head;

    for(let i=0;i<nums.length;i++){
        console.log(i);
        for(let j=0;j<nums.length;j++){
            console.log(j)
            let sum = nums[j]
            for(let k=j;k<i;k++){
                sum+=nums[k+1]
            }

            if(sum>max){
                max=sum;
                end=j+i;
                head=j;

            }
        }
    }
    console.log('end',end);
    console.log('head',head);

    return max
};

// console.log(maxSubArray([1,-1,2,4,-4,5,-1]))
// console.log(maxSubArray([5,4,-1,7,8]))
console.log(maxSubArray([-2,2]))
//leetcode submit region end(Prohibit modification and deletion)

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they 
add up to target.You may assume that each input would have exactly one solution, and you may not use the 
same element twice.You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

 /*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        let firstNum = nums[i];
        for(let j=i+1; j < nums.length; j++) {
            let secondNum = nums[j];
            if(firstNum + secondNum === target) {
                return [i,j];
            }
        }
    }
};


/*
var twoSum = function(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(nums[i], i);
    }

    // If no solution is found
    return [];
};
*/

/* 
Brute Force (Nested Loop):

Your initial solution is a brute-force approach, checking all pairs of elements to find the ones that add up to the target. This has a time complexity of O(n^2).

Hash Map:
The solution I provided in the previous response uses a hash map to reduce the time complexity to O(n). This is a more efficient approach, especially for 
larger datasets.

Sorting:
You can sort the array and then use a two-pointer approach to find the pair. Sorting has a time complexity of O(n log n), and the two-pointer approach has 
a time complexity of O(n), resulting in a total time complexity of O(n log n).

Set:
Use a set to store the elements as you iterate through the array. For each element, check if its complement (the number needed to reach the target) is in the set. 
This approach has a time complexity of O(n) and a space complexity of O(n).

Optimized Brute Force (without additional space):
You can optimize the brute-force approach slightly by avoiding the use of additional space. This doesn't change the time complexity but might be considered if 
minimizing space usage is a priority.
*/











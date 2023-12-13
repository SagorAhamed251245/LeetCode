/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
for (const e of nums) {
    let indexE = nums.indexOf(e);

    for (let i = nums.indexOf(e) + 1; i < nums.length; i++) {
      if (e + nums[i] === target) {
        return [indexE, i];
      }
    }
  }

  return null;
};

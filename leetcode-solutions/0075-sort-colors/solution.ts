/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    if (!nums || nums.length <= 1) {
        return;
    }

    let red = 0;
    let white = 0;
    let blue = 0;

    for (const num of nums) {
        if (num === 0) {
            red++;
        } else if (num === 1) {
            white++;
        } else {
            blue++;
        }
    }

    let index = 0;

    while (red--) {
        nums[index++] = 0;
    }

    while (white--) {
        nums[index++] = 1;
    }

    while (blue--) {
        nums[index++] = 2;
    }
};

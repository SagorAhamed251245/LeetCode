function removeDuplicates(nums: number[]): number {
    let l = 0;

    while (l < nums.length - 1) {
        if (nums[l] === nums[l + 1]) {
            nums.splice(l, 1);
        } else {
            l++;
        }
    }

    return nums.length;
};

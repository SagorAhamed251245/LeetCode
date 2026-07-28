/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1; // pointer to last real element in nums1
    let j = n - 1; // pointer to last element in nums2
    let k = m + n - 1; // pointer to last slot in nums1 (write position)

    while (j >= 0) {
        if (i >= 0 && nums1[i]! > nums2[j]!) {
            nums1[k] = nums1[i]!;
            i--;
        } else {
            nums1[k] = nums2[j]!;
            j--;
        }
        k--;
    }
};

function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];
  const length = nums.length;
  let left: number[] = Array(length);

  let right: number[] = Array(length);
  left[0] = 1;
  right[length - 1] = 1;

  for (let i = 1; i < length; i++) {
    left[i] = (left[i - 1] as number) * (nums[i - 1] as number);
  }
  for (let i = length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }
  for (let i = 0; i < length; i++) {
    result.push(left[i] * right[i]);
  }

  return result;

};

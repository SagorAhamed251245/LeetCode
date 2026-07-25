/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    if (!s || s.length < 1) {
        return;
    }
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        [s[l], s[r]] = [s[r]!, s[l]!];
        l++;
        r--;
    }
};

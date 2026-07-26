function validPalindrome(s: string): boolean {
    function isPalindromeRange(left: number, right: number): boolean {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    let left: number = 0;
    let right: number = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            const skipLeft: boolean = isPalindromeRange(left + 1, right);
            const skipRight: boolean = isPalindromeRange(left, right - 1);
            return skipLeft || skipRight;
        }

        left++;
        right--;
    }

    return true;
};

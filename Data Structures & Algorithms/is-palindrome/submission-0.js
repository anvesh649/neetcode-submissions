class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         const chars=s.toLowerCase().replace(/[^a-z0-9]/g, '')
    let leftPointer = 0;
    let rightPointer = chars.length - 1;
    while (leftPointer < chars.length) {
        if (chars[leftPointer] !== chars[rightPointer]) return false;
        leftPointer++;
        rightPointer--;
    }
    return true
    }
}

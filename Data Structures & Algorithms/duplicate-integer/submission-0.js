class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let new_set=new Set(nums)
        return nums.length>new_set.size
    }
}

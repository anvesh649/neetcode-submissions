class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let k=1;
        for(let i=1;i<=nums.length-1;i++){
            if(nums[i]!==nums[i-1]){
                nums[k]=nums[i]
                k++;
            }
        }
        return k;
    }
}

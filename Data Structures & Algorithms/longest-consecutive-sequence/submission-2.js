class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let lookup= new Set(nums),max=0

        for(let num of nums){
            if(!lookup.has(num-1)){
                let count=1;
                let curr=num+1;
                 while(lookup.has(curr)){
                    curr++;
                    count++;
                 }
                 max=Math.max(count,max)               
            }
        }
        return max;
    }
}

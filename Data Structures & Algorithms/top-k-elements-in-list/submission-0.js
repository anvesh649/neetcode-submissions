class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj={}
        for(let i of nums){
            if(!obj[i]){
                obj[i]=0
            }
            obj[i]++
        }
        return Object.entries(obj).sort((a,b)=>b[1]-a[1]).slice(0,k).map(k=>parseFloat(k[0]))
    }
}

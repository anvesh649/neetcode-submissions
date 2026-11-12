class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix=[],postfix=[];

        for(let i of nums){
            if(prefix.length===0){
                prefix.push(i)
            }
            else{
                prefix.push(i*prefix[prefix.length-1])
            }
        }
         for(let i of nums.reverse()){
            if(postfix.length===0){
                postfix.push(i)
            }
            else{
                postfix.push(i*postfix[postfix.length-1])
            }
        }
        postfix=postfix.reverse()
        console.log(prefix,postfix)
        let res=[]

        for(let i=0;i<=nums.length-1;i++){
            res.push((prefix[i-1] ?? 1)*(postfix[i+1] ?? 1))
        }
        return res
    }
}

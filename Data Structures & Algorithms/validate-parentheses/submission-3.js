class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let left=['(','{','['],st=[];

        for(let curr of s){
            if(left.includes(curr)){
                st.push(curr)
            }
            else{
                if(st.length===0){
                    return false;
                }
                let x=st.pop()
                if((curr===")" && x==="(") || (curr==="]" && x==="[") || (curr==="}" && x==="{")){
                    continue
                } else{
                    return false;
                }
            }
        }
        return st.length===0? true:false;

    }
}

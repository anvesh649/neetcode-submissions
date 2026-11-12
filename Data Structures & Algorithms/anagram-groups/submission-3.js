class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let res={}

        for(let s of strs){
            let count=new Array(26).fill(0);

            for(let f of s){
                count[f.charCodeAt()-'a'.charCodeAt()]++
            }

            let string=''

            for(let i=0;i<=26;i++){
                if(count[i]>0)
                    string+=String.fromCharCode(i+'a'.charCodeAt()).repeat(count[i]);
            }

            if(res[string]){
                res[string].push(s)
            }
            else{
                res[string]=[s]
            }
        }
        return Object.values(res)
    }
}

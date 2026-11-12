class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let res=new Map()

        for(let s of strs){
            let count=new Array(26).fill(0);

            for(let f of s){
                count[f.charCodeAt()-'a'.charCodeAt()]++
            }

            let string=count.join('#');

            // for(let i=0;i<=26;i++){
            //     if(count[i]>0)
            //         string+=String.fromCharCode(i+'a'.charCodeAt()).repeat(count[i]);
            // }

            if (!res.has(string)) {
              res.set(string, []);
            }
            res.get(string).push(s);
        }
        return Array.from(res.values())
    }
}

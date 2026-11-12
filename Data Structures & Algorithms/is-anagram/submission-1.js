class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length){
            return false
        }

        let count=new Array(26).fill(0)

        for(let i=0;i<s.length;i++){
            count[s.charCodeAt(i) - 'a'.charCodeAt()]++;
            count[t.charCodeAt(i) - 'a'.charCodeAt()]--;
        }

        return count.every(x => x === 0);
    }
}

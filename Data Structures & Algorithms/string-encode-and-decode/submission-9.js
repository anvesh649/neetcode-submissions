class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res=""
        for (let str of strs){
            res+=`${str.length}#${str}`
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0,res=[];
        while(i<str.length-1){
            let length="";
            while(str[i]!="#"){
                length+=str[i]
                i+=1
            }
            length=parseFloat(length)
            res.push(str.slice(i+1,i+length+1))
            i+=length+1
        }      
        return res;  
    }
}

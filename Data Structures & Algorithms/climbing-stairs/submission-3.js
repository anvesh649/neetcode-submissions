class Solution {
    /**
     * @param {number} n
     * @return {number}
     */



    climbStairs(n) {
        const x = {};
        function climb(n) {
            if (n === 1 || n === 2 || n === 3) {
                return n;
            }
            if (n <= 0) {
                return 0
            }
            if(x[n]){
                return x[n]
            }

            x[n]= climb(n - 1) + climb(n - 2)
            return x[n]
        }
        return climb(n)
    }
}

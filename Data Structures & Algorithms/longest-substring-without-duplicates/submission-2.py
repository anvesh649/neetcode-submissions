class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l=0
        r=0

        d= set()
        maxLength=0

        while r<=len(s)-1:

            if s[r] in d:
                while s[r] in d:
                    d.remove(s[l])
                    l+=1
            else:
                maxLength= max(r-l+1,maxLength)

            d.add(s[r])
            r+=1
        
        return maxLength
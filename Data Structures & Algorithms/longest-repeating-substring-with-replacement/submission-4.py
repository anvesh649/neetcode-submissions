from collections import defaultdict

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:

        r,l,maxf,maxLongest=0,0,0,0
        freq=defaultdict(int)

        for ch in s:
            freq[ch]+=1
            maxf = max(maxf,freq[ch])

            while ((r-l+1)-maxf) > k:
                freq[s[l]] -= 1
                l+=1

            maxLongest = max(maxLongest,r-l+1)
            r+=1


        return maxLongest
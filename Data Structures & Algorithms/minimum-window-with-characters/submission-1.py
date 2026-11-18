from collections import defaultdict

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        l = 0
        minString = ""

        targetCount=defaultdict(int)        

        for c in t:
            targetCount[c]+=1
        need = len(targetCount.keys())

        stringCount = defaultdict(int)    
        have = 0

        for r in range(len(s)):            
            
            stringCount[s[r]]+=1

            if(stringCount[s[r]] == targetCount[s[r]]):
                have+=1
            
            if(have == need):
                while l<=r and have == need:
                    if not minString:
                        minString = s[l:r+1]
                    if len(minString)>(r-l+1):
                        minString = s[l:r+1]                    
                    stringCount[s[l]]-=1
                    if(stringCount[s[l]] < targetCount[s[l]]):
                        have-=1
                    l+=1

        # print(have,need)
        # if have==need:
        #     if not minString:
        #         minString = s[l:r+1]
        #     if len(minString)>(r-l+1):
        #         minString = s[l:r+1]                    

        return minString



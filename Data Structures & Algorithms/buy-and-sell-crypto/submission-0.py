class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max = 0
        k=0
        for i in range(1,len(prices)):
            profit = prices[i]-prices[k]
            if profit>max:
                max =profit
            
            if prices[k]>prices[i]:
                k=i

        return max


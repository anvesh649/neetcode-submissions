from collections import Counter, defaultdict

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        target = Counter(t)
        need, have = len(target), 0
        window = defaultdict(int)
        best_start, best_len = 0, float("inf")
        l = 0

        for r, c in enumerate(s):
            window[c] += 1
            if c in target and window[c] == target[c]:
                have += 1

            while have == need:
                if r - l + 1 < best_len:
                    best_start, best_len = l, r - l + 1
                lc = s[l]
                window[lc] -= 1
                if lc in target and window[lc] < target[lc]:
                    have -= 1
                l += 1

        return "" if best_len == float("inf") else s[best_start:best_start + best_len]
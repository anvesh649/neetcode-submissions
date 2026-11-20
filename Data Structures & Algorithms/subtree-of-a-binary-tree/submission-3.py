# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:   
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:

        if not p or not q:
            return p is q

        return self.isSameTree(p.left,q.left) and  self.isSameTree(p.right,q.right) and p.val == q.val

    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:        
        if not root:
            return False

        isSame = False

        if root.val==subRoot.val:
            isSame = self.isSameTree(root,subRoot)

        return isSame or self.isSubtree(root.left,subRoot) or self.isSubtree(root.right,subRoot)


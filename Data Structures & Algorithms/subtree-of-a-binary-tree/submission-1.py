# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:   
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:

        if not p and q or not q and p:
            return False
        if not p and not q:
            return True

        isLeftSame = self.isSameTree(p.left,q.left)
        isRightSame = self.isSameTree(p.right,q.right)


        return isLeftSame and isRightSame and p.val == q.val

    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:        
        if not root:
            return False

        if(root.val==subRoot.val):
            return self.isSameTree(root,subRoot)

        isSame = self.isSubtree(root.left,subRoot) or self.isSubtree(root.right,subRoot)

        return isSame

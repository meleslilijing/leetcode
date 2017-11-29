# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isValidBST(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        return self.helper(root, float('-inf'), float('inf'))

    def helper(self, root, left, right):
        return root is None or \
            left < root.val < right and \
            self.helper(root.left, left, root.val) and \
            self.helper(root.right, root.val, right)

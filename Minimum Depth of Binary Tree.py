# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def minDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root is None:
            return 0

        return self.helper(root)

    def helper(self, root):
        if root is None:
            return 9999  # 一个极大的数

        if root.left is None and root.right is None:
            return 1
        else:
            return min(self.helper(root.left), self.helper(root.right)) + 1

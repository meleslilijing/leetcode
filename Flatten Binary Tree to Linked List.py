# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def flatten(self, root):
        """
        :type root: TreeNode
        :rtype: void Do not return anything, modify root in-place instead.
        """
        self.flatten_1(root)

    def flatten_1(self, root):
        if root is None:
            return

        self.flatten_1(root.left)
        self.flatten_1(root.right)

        if root.left is None: return

        node = root.left

        while node.right is not None:
            node = node.right

        node.right = root.right
        root.right = root.left
        root.left = None


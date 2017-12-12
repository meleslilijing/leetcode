# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def recoverTree(self, root):
        """
        :type root: TreeNode
        :rtype: void Do not return anything, modify root in-place instead.
        """
        p1, p2 = None, None
        nodeList = []
        self.inorderTravel(root, nodeList)

        first, second = None, None

        for i in range(1, len(nodeList)):
            pre = nodeList[i - 1]
            cur = nodeList[i]
            if cur.val > pre.val: continue

            if first is None:
                first = pre

            second = cur

        if first is None: return
        temp = first.val
        first.val = second.val
        second.val = temp

    def inorderTravel(self, root, res):
        if root is None: return
        self.inorderTravel(root.left, res)
        res.append(root)
        self.inorderTravel(root.right, res)
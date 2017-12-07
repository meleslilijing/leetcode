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

        for i in range(1, len(nodeList)):
            pre = nodeList[i - 1]
            cur = nodeList[i]
            if pre.val > cur.val:
                misList.append(cur)



    def inorderTravel(self, root, list):
        if root is None: return
        self.inorderTravel(root.left, list)
        list.append(root)
        self.inorderTravel(root.right, list)
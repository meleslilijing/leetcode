class Solution(object):
    def lowestCommonAncestor(self, root, node1, node2):
       if root is None or node1 is None or node2 is None:
           return None

       if self.cover(node1, node2):
           return node1

       if self.cover(node2, node1):
           return node2

       if self.cover(root.left, node1) and self.cover(root.left, node2):
           return self.lowestCommonAncestor(root.left, node1, node2)

       if self.cover(root.right, node1) and self.cover(root.right, node2):
           return self.lowestCommonAncestor(root.right, node1, node2)

       return root

    def cover(self, root, node):
       if root is None:
           return False

       if root == node:
           return True

       return self.cover(root.left, node) or self.cover(root.right, node)
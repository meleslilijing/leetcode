# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def sortedListToBST(self, head):
        """
        :type head: ListNode
        :rtype: TreeNode
        """
        if head is None:
            return None

        if head.next is None:
            return TreeNode(head.val)

        pre, slow, fast = None, head, head
        while fast.next is not None and fast.next.next is not None:
            pre = slow
            slow = slow.next
            fast = fast.next.next

        fast = slow.next
        node = TreeNode(slow.val)

        if pre is not None:
            pre.next = None
            node.left = self.sortedListToBST(head)

        node.right = self.sortedListToBST(fast)

        return node

def output(node):
    if node.left is not None:
        output(node.left)

    print(node.val)

    if node.right is not None:
        output(node.right)

def test():
    node1 = ListNode(1)
    node2 = ListNode(2)
    node3 = ListNode(3)
    node4 = ListNode(4)
    node5 = ListNode(5)

    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5

    head = node1

    solution = Solution()
    tree = solution.sortedListToBST(head)
    output(tree)



test()
class Solution(object):
    def firstMissingPositive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) == 0: return 1
        s = set(nums)

        i = 1
        while True:
            if i not in s:
                return i
            i += 1

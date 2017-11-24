class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        if len(nums) < 2: return None

        s = {}
        for idx, a in enumerate(nums):
            b = target - a
            if b in s:
                return sorted([idx, s[b]])
            s[a] = idx

        return None
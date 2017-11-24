class Solution(object):
    def sortColors(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        p0 = p1 = 0
        i = 0
        for i in range(len(nums)):
            temp = nums[i]
            nums[i] = 2
            if temp <= 1:
                nums[p1] = 1
                p1 += 1
            if temp == 0:
                nums[p0] = 0
                p0 += 1

class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums: return 0
        if len(nums) <= 1: return len(nums)
        buf_index = 0
        for i in range(1, len(nums)):
            if nums[i] != nums[buf_index]:
                buf_index += 1
                nums[buf_index] = nums[i]

        return buf_index + 1

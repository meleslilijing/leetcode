import re

class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if len(s) <= 1: return True

        str = re.sub(r'[^a-zA-Z0-9]', '', s)

        begin, end = 0, len(str) - 1
        while begin <= end:
            if str[begin].lower() != str[end].lower(): return False
            begin += 1
            end -= 1
        return True

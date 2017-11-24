class Solution(object):
    def judgeCircle(self, moves):
        """
        :type moves: str
        :rtype: bool
        """
        obj = {
            'U': 0,
            'L': 0,
            'D': 0,
            'R': 0
        }

        for str in moves:
            obj[str] += 1

        return obj['U'] - obj['D'] == 0 and obj['L'] - obj['R'] == 0
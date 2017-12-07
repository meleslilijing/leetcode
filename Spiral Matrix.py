

class Solution(object):
    def spiralOrder(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """
        direction = 'right'
        s = set()
        result = []

        i = 0
        cur = [0, 0]
        while i < len(matrix) * len(matrix[0]):
            self.append(result, matrix, cur)
            next = self.step(cur, direction)

            i += 1



    def append(self, list, matrix, point):
        x, y = point[0], point[1]
        list.append(matrix[x][y])
        matrix[x][y] = None

    def step(self, p, direction):
        s = {
            'up': [0, -1],
            'down': [0, 1],
            'left': [-1, 0],
            'right': [1, 0]
        }[type]

        x, y = p[0] + s[0], p[1] + s[1]
        return [x, y]


    def turnRight(self, type):
        return {
            'left': 'up',
            'up': 'right',
            'right': 'down',
            'down': 'left'
        }[type]
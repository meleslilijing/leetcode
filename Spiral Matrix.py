# next point

class Solution(object):
    def spiralOrder(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """
        result = []

        if matrix is None or len(matrix) == 0 or len(matrix[0]) == 0:
            return result

        n, m = len(matrix), len(matrix[0])
        row, col = 0, -1

        while True:
            for i in range(m):
                col += 1
                result.append(matrix[row][col])
            n -= 1

            if n == 0:
                break

            for i in range(n):
                row += 1
                result.append(matrix[row][col])
            m -= 1

            if m == 0:
                break

            for i in range(m):
                col -= 1
                result.append(matrix[row][col])

            n -= 1
            if n == 0:
                break

            for i in range(n):
                row -= 1
                result.append(matrix[row][col])

            m -= 1
            if m == 0:
                break

        return result



def main():
    matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    solution = Solution()
    print(solution.spiralOrder(matrix))


main()

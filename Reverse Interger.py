def reverse(self, x):
    """
    :type x: int
    :rtype: int
    """
    ret = []
    absX = abs(x)
    while absX >= 1:
        ret.append(absX % 10)
        absX /= 10
    retnum = 0 if not ret else reduce(lambda x, y: x * 10 + y, ret) * (-1 if x < 0 else 1)
    return 0 if retnum > (2 ** 31 - 1) or retnum < -2 ** 31 else retnum
/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    if(A.length === 0) {
        return 0;
    }

    var F = function(n, A) {
        var sum = 0;

        var length = A.length;
        // var point = 0;
        var point = n; //
        // point = point < 0 ? point + length : point;

        for(var i = 0; i < length; i++) {
            sum += i * A[point];
            point++;
            if(point >= length) point = point - length;
        }

        return sum
    };

    var buffer = A.map(function(n, index) {
        return F(index, A);
    });

    return Math.max.apply(null, buffer);
};

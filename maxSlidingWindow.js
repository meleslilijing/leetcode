/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (k <= 0) {
        return [];
    }
    if (nums.length === 0) {
        return []
    }
    if (nums.length < k) {
        k = nums.length;
    }
    
    var output = [];
    var queue = [];
    
    var max = nums[0];
    for (var i = 0; i < nums.length - k + 1; i++) {
        var newVal = nums[i];
        if (i < k) {
            queue.push(newVal);

            for() {

            }
        }


    }
    
    
    return output;
};


// var maxSlidingWindow = function(nums, k) {
//     if (k <= 0) {
//         return [];
//     }
//     if (nums.length === 0) {
//         return []
//     }
//     if (nums.length < k) {
//         k = nums.length;
//     }

//     var queue = [];
//     var res = [];

//     for (var i = 0; i < nums.length; i++) {
//         var x = nums[i];    // new val

//         // window的移动
//         if (i >= k && queue[0] <= i - k) {
//             queue.shift();  // pop front
//         }

//         // 新的数据进入window前，对window的原有队列进行维护
//         // 从后往前遍历，仅仅是这样写比较方便，不用处理下标。
//         // 维持 queue 的第一个值是最大值
//         while (
//             queue.length > 0 
//             && nums[queue[queue.length - 1]] <= x
//         ) {   // queue is not empty
//             queue.pop();
//         }

//         // queue存的是下标
//         queue.append(i);

//         // 每次窗口移动前，把最大值添加入res, 且window的第一个值一定是最大值
//         if (i >= k - 1) {
//             res.push(nums[queue[0]])
//         }
//     }
//     return res;
// }

var maxSlidingWindow = function(nums, k) {
    if (k <= 0) {
        return [];
    }

    if (nums.length === 0) {
        return [];
    }

    if (nums.length < k) {
        k = nums.length;
    }

    var queue = [];
    var res = [];

    for (var i = 0; i < nums.length; i++) {
        var x = nums[i];

        if (i >= k && queue[0] <= i - k) {
            queue.shift();
        }

        while (nums[queue[queue.length - 1]] < x && queue.length > 0) {
            queue.pop();
        }

        queue.push(i);

        if (i >= k - 1) {
            res.push(nums[queue[0]]);
        }
    }

    return res;

}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length <= 0) {
        return [];
    }

    if (k === 0) {
        return [];
    }

    if (k > nums.length) {
        k = nums.length;
    }

    var res = [];
    var queue = [];

    for (var i = 0; i < nums.length; i++) {
        var x = nums[i];
        if (i >= k && queue[0] <= i - k) {
            queue.shift();
        }

        while (
            queue.length > 0 // queue is not empty
            && nums[queue[queue.length - 1]] < x   // 小于最大值
        ) {
            queue.pop();
        }

        queue.push(i);

        if (i >= k - 1) {
            res.push(nums[queue[0]]);
        }
    }

    return res;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0) {
        return [];
    }

    if (k <= 0) {
        return [];
    }

    if (k > nums.length) {
        k = nums.length;
    }

    var res = [];
    var queue = [];

    for (var i = 0; i < nums.length; i++) {
        var x = nums[i];

        if (queue[0] <= i - k && i >= k) {
            queue.shift();
        }

        // maintain queue
        // queue存的是下标
        while (
            queue.length > 0
            && nums[queue[queue.length - 1]] < x
        ) {
            queue.pop();
        }

        queue.push(i);

        if (i >= k - 1) {
            res.push(nums[queue[0]]);
        }
    }
}

























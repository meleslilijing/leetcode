ArrayList<ArrayList<Integer>> pathSum(Node root, int sum){
    ArrayList<ArrayList<Integer>> result = new ArrayList<ArrayList<Integer>>();
    ArrayList<Integer> path = new ArrayList<Integer>();
    pathSumHelper(root, path, result, sum);
    return result;
 }
 
 void pathSumHelper(Node root, ArrayList<Integer> path, ArrayList<ArrayList<Integer>> result, int sum){
    if (root == null) return;
    
    path.add(root.value);
    if (root.value == sum){
        ArrayList<Integer> tp = new ArrayList<Integer>(path);
        result.add(tp);
    }
    pathSumHelper(root.left, path, result, sum - root.value);
    pathSumHelper(root.right, path, result, sum - root.value);
    path.remove(path.length()-1);
 }


 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    var result = [];    // 结果
    var path = [];  // 路径缓存
    helper(root, path, result, sum);
    return result;
};

function helper(root, path, result, sum) {
    if (root === null) {
        return;
    }

    path.push(root);
    // 符合条件的结果
    if (root.val === sum) {
        // var tp = 
        // result.add(tp)
    }

    helper(root.left, path, result, sum - root.val);
    helper(root.right, path, result, sum - root.val);
    path.pop();
}


// 结果只要求返回true/false, 深度遍历一次
var hasPathSum = function(root, sum) {
    if (root === null) {
        return false;
    }


}

function helper
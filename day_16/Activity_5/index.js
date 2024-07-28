const TreeNode = require("./TreeNode.js");

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(19);

// console.log(root.val);
// console.log(root.left.val);
// console.log(root.right.val);
// console.log(root.left.left.val);
// console.log(root.left.right.val);
// console.log(root.right.left.val);
// console.log(root.right.right.val);


//Task 9 - Write a recusive function to perform an in-oder tarversal of a binary tree. Log the nodes as they are visited
function inorderTrav(root){
    if(root == null) return;
    inorderTrav(root.left);
    process.stdout.write(root.val + " ");
    inorderTrav(root.right);
}
inorderTrav(root);

console.log()
console.log("------------------------------------------------------------------------");
//Task 10 - Write a recusive function to calculate the depth of a binary tree. Log the result for a few test cases.

function depthoFTree(root){
    if(root == null) return 0;
    return 1 + Math.max(depthoFTree(root.left), depthoFTree(root.right));
}

console.log(depthoFTree(root));
root.left.left.left = new TreeNode(1);
console.log(depthoFTree(root));
inorderTrav(root);
console.log()
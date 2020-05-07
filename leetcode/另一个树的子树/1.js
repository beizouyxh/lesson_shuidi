/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    //1.遍历s的所有节点，看那个节点和t的根节点相等
    //2.相等则继续遍历下去，匹配余下节点，知道t树遍历完
    if(!s&&t){
        return false;
    }
     let linkNode = function(node,target){
         if(!node&&target)return false;
         if(node&&!target)return false;
         if(!node&&!target) return true
         if(node.val===target.val){
             return linkNode(node.left,target.left)&&linkNode(node.right,target.right)
         }else{
             return false
         }
     }
   return linkNode(s,t)||isSubtree(s.left,t)||isSubtree(s.right,t)
};

//1.外层函数遍历s树的所有节点，将s树的每个节点都当做一颗树的根节点
//2.内层函数遍历s的子树的每个节点与t的每个节点是否相等

// 一个节点相同则返回(true&&下一个节点的比较结果)
// 不同则直接返回false
// 递归出口：
// .s子树节点为空，t不为空，返回false
// s子树节点不为空，t为空，返回false
// s子树节点与t子树节点同时为空，返回true
// s子树节点值等于t子树节点值，返回true
// s子树节点值不等于t子树节点值，返回false

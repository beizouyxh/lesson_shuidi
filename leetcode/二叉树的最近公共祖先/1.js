var lowestCommonAncestor = function(root, p, q) {
    if(root == null || root == p || root == q){
        return root;
    }
    let left = lowestCommonAncestor(root.left,p,q);
    console.log(left)
    let right = lowestCommonAncestor(root.right,p,q);
    console.log(right)
    if (left && right) {
        return root;
    } else if (left) {
        return left;
    } else if (right) {
        return right;
    }
    return null;
};

//递归
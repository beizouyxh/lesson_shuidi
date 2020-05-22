var buildTree = function(preorder, inorder) {
    let build = (inorder) => {
        if(!inorder || !inorder.length) return null
        let tmp = preorder.shift(),mid = inorder.indexOf(tmp)
        // console.log(tmp)
        // console.log(mid)
        let root = new TreeNode(tmp)
        root.left = build(inorder.slice(0,mid))
        root.right = build(inorder.slice(mid + 1))
        return root
    }
    return build(inorder)
};
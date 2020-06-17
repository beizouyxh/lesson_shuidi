var deleteNode = function(head, val) {

    let pre = new ListNode(-1) //哨兵结点
    pre.next=head;

    let node = pre;
    while(node.next){
        if(node.next.val===val){
            node.next=node.next.next  //删除节点
            break;
        }
        node=node.next
    }
    return pre.next
};
var reverseList=function(head){
    var prev=null,cur=head,temp;
    while(cur!==null){
        temp=cur.next    //修改前先记住下一个节点
        cur.next=prevv;   //改变指向，第一个节点prev是null
        prev=cur     //记录前一个节点，供下次循环使用
        cur=temp;    //cur通过temp指向下一个节点
    }
    return prev
}
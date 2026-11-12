/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(list1===null){
            return list2
        }
        if(list2===null){
            return list1
        }

        let head=null;

        if(list1.val<=list2.val){
            head=list1
            list1=list1.next
        } 
        else{
            head=list2;
            list2=list2.next
        }
        let cur=head;
        while(list1!==null && list2!==null ){
            if(list1.val<=list2.val){
                cur.next=list1
                cur=cur.next
                list1=list1.next
            } else{
                cur.next=list2
                cur=cur.next
                list2=list2.next
            }
        }
        while(list1!==null){
            cur.next=list1
            cur=cur.next
            list1=list1.next
        }
        while(list2!==null){
            cur.next=list2
            cur=cur.next
            list2=list2.next
        }
        return head;
        

    }
}

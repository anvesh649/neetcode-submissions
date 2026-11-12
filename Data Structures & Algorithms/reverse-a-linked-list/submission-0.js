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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let cur=head,first=head;
        
        while(cur!==null){
            let temp=cur.next;
            cur.next=head;
            head=cur
            cur=temp;
        }
        if(first){
            first.next=null
        }
        return head;
    }
}

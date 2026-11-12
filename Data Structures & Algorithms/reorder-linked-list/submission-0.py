# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        st=[]
        temp=head
        n=0
        while temp:
            st.append(temp)
            temp=temp.next
            n+=1

        temp=head
        for i in range(0,n//2):
            last=st.pop()
            temp1=temp.next
            temp.next=last
            last.next=temp1
            temp=temp1
        temp.next = None
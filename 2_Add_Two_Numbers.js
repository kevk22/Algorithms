/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Time : O(n)
var addTwoNumbers = function (l1, l2) {
    let head = new ListNode(null);
    let carry = 0;
    let dummy = head;

    while (l1 || l2) {
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;
        let curSum = l1Val + l2Val + carry;

        carry = curSum > 9 ? 1 : 0;

        if (head.val === null) {
            head.val = curSum % 10;
        } else {
            dummy.next = new ListNode(curSum % 10);
            dummy = dummy.next;
        }

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if (carry === 1) dummy.next = new ListNode(1);

    return head;
};
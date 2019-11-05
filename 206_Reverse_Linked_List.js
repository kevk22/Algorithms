/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    return reverseRecursive(head, null);
};

function reverseRecursive(head, prev = null) {
    if (!head) return prev;

    let after = head.next;
    head.next = prev;
    return revervseRecursive(after, head);
}

function reverseIterative(head) {
    let prev = null;
    let cur = head;

    while (cur) {
        let after = cur.next;
        cur.next = prev;
        prev = cur;
        cur = after;
    }

    return prev;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// Only given node
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};


// Given both node and head 
function deleteNode(head, position) {

    if (position === 0) return head.next;

    let count = 0;
    let cur = head;

    while (count < position || !cur) {
        if (count === position - 1) {
            cur.next = cur.next.next || null;
            return head;
        }

        cur = cur.next;
        count++;
    }

    return head;
}

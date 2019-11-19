/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let count = 0;
    let prev = head;
    let tail = head;

    while (tail.next !== null) {
        if (count === n) {
            prev = prev.next;
            tail = tail.next;
        } else {
            tail = tail.next;
            count++;
        }
    }

    if (count !== n) return head.next;

    prev.next = prev.next.next;
    return head;
};


// Alternate code
var removeNthFromEnd = function (head, n) {
    let count = 1;
    let tail = head;
    let prev = head;

    while (count <= n) {
        tail = tail.next;
        count++;
    }

    if (tail === null) return head.next;

    while (tail.next !== null) {
        prev = prev.next;
        tail = tail.next;
    }

    prev.next = prev.next.next;
    return head;
};



let key = Object.keys(map).sort((a,b) => map[a] - map[b])
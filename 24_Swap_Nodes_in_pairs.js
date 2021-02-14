/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */

//Time complexity: O(n), Space complexity: O(1)
var swapPairs = function (head) {
  let temp = new ListNode(-1, head);
  let prev = temp;

  while(prev.next && prev.next.next) {
    let node1 = prev.next;
    let node2 = prev.next.next;

    node1.next = node2.next;
    node2.next = node1;
    prev.next = node2;

    prev = node1;
  }

  return temp.next;
};
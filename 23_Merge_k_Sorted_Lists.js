/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {  
  if (!lists.length) return null;
  
  while (lists.length > 1) {
    let l1 = lists.shift();
    let l2 = lists.shift();
    let merged = merge(l1, l2);
    
    lists.push(merged);
  }
  
  return lists[0];
};

function merge(l1, l2) {
  let merged = new ListNode(null);
  let cur = merged;
  
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    
    cur = cur.next;
  }
  
  if (l1 !== null) cur.next = l1;
  if (l2 !== null) cur.next = l2;
  
  return merged.next;
}
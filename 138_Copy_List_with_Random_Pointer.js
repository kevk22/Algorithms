/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/*
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
  
    // store references to clones
    let copies = new Map();
    let temp = head;
    
    // set key to original node with value set to cloned node
    while (temp) {
        copies.set(temp, new Node(temp.val));
        temp = temp.next;
    }
    
    // reset temp and iterate through list again to set clone pointers 
    temp = head;
    while (temp) {
        copies.get(temp).next = copies.get(temp.next) || null;
        copies.get(temp).random = copies.get(temp.random) || null;
        
        temp = temp.next;
    }
    
    return copies.get(head);
};
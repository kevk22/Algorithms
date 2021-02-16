/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.head = new Node();
  this.tail = new Node();
  this.nodeMap = {};
  this.capacity = capacity;
  this.size = 0;

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let node = this.nodeMap[key];


  if (node !== undefined) {
    this.removeNode(node);
    this.addNode(node);
    return node.val;
  }

  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let node = this.nodeMap[key];

  if (node !== undefined) {
    node.val = value;
    this.removeNode(node);
    this.addNode(node);
  } else {
    if (this.capacity === this.size) {

      this.nodeMap[this.tail.prev.key] = undefined;
      this.removeNode(this.tail.prev);
    }

    let newNode = new Node();
    newNode.val = value;
    newNode.key = key;
    this.nodeMap[key] = newNode;

    this.addNode(newNode);
  }

};

LRUCache.prototype.addNode = function (node) {
  let head_next = this.head.next;

  node.next = head_next;
  node.prev = this.head;
  this.head.next = node;
  head_next.prev = node;
  this.size++;
}


LRUCache.prototype.removeNode = function (node) {
  let nextNode = node.next;
  let prevNode = node.prev;

  nextNode.prev = prevNode;
  prevNode.next = nextNode;
  this.size--;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
class Node {
  constructor(key, val, next = null, prev = null) {
    this.key = key;
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}
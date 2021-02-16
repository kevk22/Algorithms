class LRUCache{
  constructor(capacity){
    this.capacity = capacity;
    this.nodeMap = {};
    this.head = new ListNode();
    this.tail = new ListNode();
    this.size = 0;  

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    let node = this.nodeMap[key];

    if (node !== null) {
      this.removeNode(node);
      this.addNode(node);
      return node.val;
    }

    return -1;
  }

  put(key, value) {
    let node = this.nodeMap[key];

    if (node !== null) {
      this.removeNode(node);
      node.val = value; 
      this.addNode(node);
    } else {
      if (this.size === this.capacity) {
        this.nodeMap[this.tail.prev.key] = null;
        this.removeNode(this.tail.prev);
      }

      let newNode = new ListNode(key, value)
      this.nodeMap[key] = newNode;
      this.addNode(newNode);

    }


  }

  addNode(node) {
      let headNext = this.head.next;

      node.next = headNext;
      node.prev = this.head;
      this.head.next = node;
      headNext.prev = node;
  }

  removeNode(node) {
    let nextNode = node.next;
    let prevNode = node.prev;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

}

class ListNode{
  constructor(key, val){
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
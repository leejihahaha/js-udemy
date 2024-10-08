class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const first = new Node("Hi");
// first.next = new Node('There');
// first.next.next = new Node('How');
// first.next.next.next = new Node('Are');
// first.next.next.next.next = new Node('You');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val); //새 노드 생성
    if (!this.head) {
      // head가 없다면
      this.head = newNode; //head, tail 같은 것 가리키기
      this.tail = this.head;
    } else {
      this.tail.next = newNode; //마지막 노드의 next가 새 노드 가리킴
      this.tail = newNode; // push 동작 전 마지막 노드
    }
    this.length++;
    return this;
  }
  pop() {
    //리스트의 마지막 요소를 제거하고 그 값을 반환
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current; //새 tail이 됨
    while (current.next) {
      // 리스트에 값이 남겨져 있는 동안 계속 반복
      newTail = current; //while 이 끝나면 tail 직전
      current = current.next; // while 이 끝나면 tail
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      // 이 조건 추가하지 않으면 pop 계속 가능
      this.head = null;
      this.tail = null;
    }
    return current; //마지막 노드 반환
  }
  shift() {
    // 앞에서 노드 제거
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    //node 자체를 반환
    if (index < 0 || index >= this.length) return null; //유효한지 체크
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  // 11 12 13 14
  reverse() {
    var current = this.head; // 11
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      // 11
      next = current.next; // 12
      current.next = prev; // 11 <- 12
      prev = current; // prev : 11
      current = next; // current : 12
    }
    return this;
  }
}

var list = new SinglyLinkedList();

list.push("1");
list.push("2");
list.push("3");

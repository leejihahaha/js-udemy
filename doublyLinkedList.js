class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //1. 입력받을 새 노드를 생성
  //2. 유효성검사 (head가 null인지 length가 0인지)
  //3. 비어있다면 head, tail를 새 노드로 설정
  //4. 비어있지 않다면 현재 tail을 찾아서 tail.next를 새로운 노드로 설정
  //5. 새로 만든 노드의 tail.next.prev를 원래 tail로 설정
  //6. length를 1 증가시키고, 리스트를 반환한다
  push(val) {
    // 99 <->100
    const newNode = new Node(val);
    if (!this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //1. tail이 비어있거나 length ===0 일때 pop하면 undefined 리턴
  //2. 현재 tail을 미리 변수에 할당한다 (마지막에 제거된 노드 반환)
  //3. 길이가 1인 리스트라면 pop 실행 후 head와 tail을 null로 할당해준다
  //4. 제거 후 tail을 원래 tail의 이전 노드로 할당해준다
  //5. 새로운 tail의 next를 null로 할당한다(끊어줌)
  //6. length를 1 감소시킨다

  pop() {
    if (this.head === null) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //단일연결리스트와 달리 순회를 할 필요가 없다
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
}

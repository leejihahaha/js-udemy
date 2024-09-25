class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // push
  // 큐에 원소를 추가하고 사이즈를 리턴
  // 1.밸류값을 받아 새 노드를 생성한다
  // 2.큐에 노드가 하나도 없다면, 새 노드를 first와 last로 지정한다
  // 3.사이즈를 1 증가시킨다
  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // pop
  // 큐에서 가장 오래된 노드를 제거하고 제거된 노드를 리턴
  // 1.큐가 비어있다면 null을 리턴
  // 2.first 노드를 임시 변수에 할당
  // 3.first와 last 노드가 같다면(큐에 노드가 1개 있으면), 제거 후 first와 last를 null로 만듬
  // 4.큐에 2개 이상의 노드가 있다면 기존 first 노드의 next를 새로운 first로 지정
  // 5.사이즈를 1 감소
  dequeue() {
    if (this.size === 0) return null;
    const removedNode = this.first; //마지막 출력하는 값
    if (this.first === this.last) {
      this.first = null;
    } else {
      this.first = this.first.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode;
  }
}

// 스택에 원소를 하나 추가하고 size를 리턴(unshift)
// 1.value를 파라미터로 받고 새 노드를 생성한다
// 2.스택이 비어있다면 first와 last에 새 노드를 할당한다
// 3.하나의 노드라도 있다면 이미 존재하는 노드를 저장할 임시 변수를 생성한다
// 4.그리고 새 노드를 first에 할당하고 기존 노드를 next로 연결한다
// 5.사이즈를 1 증가시킨다
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      //노드가 있는지 없는지
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldFirst = this.first;
      this.first = newNode;
      newNode.next = oldFirst;
    }
    return ++this.size; // 만약 this.size++ 쓰면 일단 리턴되고 그담에 증가함 (표현식 먼저 수행하고 그다음에 증가)
  }
  //   스택에서 최근에 추가된 노드를 제거하고 제거된 노드를 리턴(shift)
  //   1.스택이 비어있다면 null을 리턴
  //   2.현재의 first를 마지막에 리턴하기 위해 변수에 할당하여 보존
  //   3.스택에 노드가 1개밖에 없다면, first와 last를 null로 만듬
  //   4.노드가 2개 이상 있다면, 현재의 first의 next를 새로운 first로 만듬
  //   5.size 1 감소
  pop() {
    if (this.size === 0) return null;
    const poppedNode = this.first; //삭제하고 반환할 것
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    poppedNode.next = null;
    this.size--;
    return poppedNode;
  }
}

const stack1 = new Stack();

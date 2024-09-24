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
  //1.길이가 0이라면 (빈 리스트라면) undefined를 리턴한다
  //2. 현재 head를 미리 변수에 할당
  //3. 길이가 1인 리스트라면 pop 실행 후 head와 tail을 null로 할당
  //4. 제거 후 head를 원래 head 의 next 노드로 할당
  //5. 새로운 head의 prev를 null로 할당
  //6. old head의 next를 null로 할당
  //7. length를 1 감소시킨다
  shift() {
    //앞에서 제거
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  //1. 새로운 노드 생성
  //2. 리스트 길이가 0이면 head와 tail에 새로운 노드를 할당
  //3. 길이가 0이 아니면 head의 prev에 새로운 노드를 할당
  //4. 새 노드의 next에 기존 head를 할당
  //5. 새 노드를 head로 할당
  //6. 길이를 1 증가
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // get:인덱스 값을 받아 해당 인덱스의 노드를 리턴
  //1.싱글 링크드 리스트와 다르게, tail 에서 거슬러 올라가는 것이 가능(prev)
  //2. 그래서 후반부 인덱스가 주어진 경우, tail에서 prev를 통해 값을 찾는다
  //3. 리스트 인덱스 범위를 초과하는 값이 주어지면 null 을 리턴한다
  //4. 인덱스가 리스트 길이의 절반보다 같거나 작으면 head 부터 출발
  //5. 인덱스가 리스트 길이의 절반보다 크면 tail 부터 출발
  //6. 노드를 찾으면 그 값을 반환한다
  get(idx) {
    if (idx < 0 || idx > this.length - 1) return null;
    let count;
    let currentNode;
    if (idx < this.length / 2) {
      count = 0;
      currentNode = this.head;
      while (count !== idx) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== idx) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }
  // set:인덱스 값과 밸류값을 받아 해당 인덱스의 노드의 밸류를 변경하고 성공시 true 반환
  // 1. get 메서드를 활용해 인덱스의 노드를 새로운 변수에 할당
  // 2. get 메서드가 유효한 노드를 반환하면 값을 변경하고 true를 반환
  // 3. 아니면 false를 출력
  set(idx, val) {
    let foundNode = this.get(idx);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }
  // insert : 인덱스 값과 밸류 값을 받아 해당 인덱스 자리에 밸류를 가진 새로운 노드를 끼워넣고 true 반환
  // 1.tail에서 prev로 거슬러 올라올 수도 있으므로 주어진 인덱스의 크기에 따라 결정
  // 2.유효하지 않은 인덱스가 주어지면 false를 반환
  // 3.index가 0이면, unshift 사용
  // 4.index가 length - 1 이면, push 사용
  // 5.원래 index의 노드를 뒤로 밀어내고 연결 재수립
  // 6.길이를 1 증가

  insert(idx, val) {
    if (idx < 0 || idx > this.length - 1) return false;
    if (idx === 0 && this.unshift(val)) return true;
    if (idx === this.length - 1 && this.push(val)) return true;
    const newNode = new Node(val);
    const prevNode = this.get(idx - 1);
    const originalNode = this.get(idx);
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = originalNode;
    originalNode.prev = newNode;
    this.length++;
    return true;
  }
  // remove : 인덱스 값을 받아 해당 인덱스의 노드를 제거하고 제거된 노드 반환
  // 1.유효하지 않은 인덱스가 주어지면 undefined를 반환
  // 2.index가 0이면, shift 사용
  // 3.index가 length - 1이면, pop 사용
  // 4.제거될 노드 찾기 위해 get 메서드 사용
  // 5.제거될 노드 전 후 의 연결 재수립
  // 6.제거된 노드는 next와 prev를 null로 지정한다
  // 7.길이를 1 감소

  remove(idx) {
    if (idx < 0 || idx > this.length - 1) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const foundNode = this.get(idx);
    foundNode.prev.next = foundNode.next;
    foundNode.next.prev = foundNode.prev;
    foundNode.prev = null;
    foundNode.next = null;
    this.length--;
    return foundNode;
  }
}

//최소 이진 힙 사용
//우선순위가 같은경우, 먼저 삽입된 것이 무엇인지 확인하고 그에 맞게 자리 바꾸기 진행
//보통은 우선순위에 더해 여러가지 리소스의 개수나 밀도 등 비교에 영향을 주는 것들이 많이 포함
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    // this.insertTime = Date.now()
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      // 루트 idx가 0이기 때문에
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  // swap 상태
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let left, right; // 범위 확인 전 초기화
      let swap = null;
      if (leftIdx < length) {
        left = this.values[leftIdx];
        if (left.priority < element.priority) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        right = this.values[rightIdx];
        if (
          (swap === null && right.priority < element.priority) ||
          (swap !== null && right.priority < left.priority)
        ) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const ER = new PriorityQueue();
// ER.enqueue("common cold", 1);
// ER.enqueue("gunshot wound", 5);
// ER.enqueue("high fever", 2);

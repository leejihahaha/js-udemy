//최대 힙
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  //   0  1  2  3  4  5  6
  // [41,39,33,18,27,12,55 <--추가]
  bubbleUp() {
    let idx = this.values.length - 1; //6
    const element = this.values[idx]; //55
    while (idx > 0) {
      // 루트 idx가 0이기 때문에
      let parentIdx = Math.floor((idx - 1) / 2); //5 /2 => 3
      let parent = this.values[parentIdx]; //33
      if (element <= parent) break; //55 <= 33 elment가 parent보다 작거나 같으면 break;(커야함)
      //swap
      this.values[parentIdx] = element; //33 <-> 55
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // [41, 39, 33, 18, 27, 12]
  //큰 값을 추출
  extractMax() {
    const max = this.values[0]; // 41
    const end = this.values.pop(); //12
    if (this.values.length > 0) {
      this.values[0] = end; //12 [12,39,33,18,27,12]
      this.sinkDown();
    }
    return max;
  }

  // swap 상태
  //힙의 성질을 유지하기 위해 값을 재정렬
  sinkDown() {
    let idx = 0; //맨 처음
    const length = this.values.length;
    const element = this.values[0]; //옮겨서 위치시켜야하는 숫자
    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let left, right; // 범위 확인 전 초기화
      let swap = null;
      if (leftIdx < length) {
        //인덱스가 유효한지
        left = this.values[leftIdx];
        if (left > element) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        right = this.values[rightIdx];
        if (
          (swap === null && right > element) || //오른쪽자식과 부모노드 비교
          (swap !== null && right > left) //오른쪽자식과 왼쪽 비교해서 오른쪽이 크면 swap에 오른쪽 저장
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

const heap = new MaxBinaryHeap();

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //루트가 있는지 확인
  //없다면 루트가 새 노드로 설정
  // 존재한다면 새로운 노드의 값이 르트의 값보다 큰지 작은지 확인
  //크다면 노드에 오른쪽 값이 있는지 확인-> 값이 있다면 그 노드로 옮겨가서 단계를 반복(while)
  //작다면 노드에 왼쪽 값이 있는지 확인-> 값이 있다면 그 노드로 옮겨가서 단계를 반복(while)

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined; //값이 같으면 undefined
      if (val > current.val) {
        //오른쪽
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      } else if (val < current.val) {
        //왼쪽
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return this;
        }
      }
    }
  }
  //해당 값이 트리에 있는지 탐색(삽입할때와 비슷)
  //루트가 있다면 새 노드 값을 보고 찾는 값과 같은지 확인

  find(val) {
    //val: 40 -> false
    if (this.root === null) return undefined;
    let current = this.root;
    let found = false;
    while (current && !found) {
      //찾지 못하는 경우 found가 계속 거짓, current가 null이 되면 멈춤
      if (val > current.val) {
        current = current.right;
      } else if (val < current.val) {
        current = current.left;
      } else {
        //같은 경우
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

// const tree = new BinarySearchTree();

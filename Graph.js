class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }

  addEdge(v1, v2) {
    // 방향 그래프로 만드려면 아래중 1개만 실행하면 됨
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(name) {
    while (this.adjacencyList[name].length) {
      const adjacentVertex = this.adjacencyList[name].pop();
      this.removeEdge(adjacentVertex, name);
    }
    delete this.adjacencyList[name];
  }
}

const g = new Graph();
g.addVertex("Dallas");
g.addVertex("Seoul");
g.addVertex("Chicago");

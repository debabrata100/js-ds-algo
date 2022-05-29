class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(A, B) {
    this.adjacencyList[A] = this.adjacencyList[A].filter((v) => v !== B);
    this.adjacencyList[B] = this.adjacencyList[A].filter((v) => v !== A);
  }
  removeVertex(vertex) {
    console.log(this.adjacencyList[vertex].length);
    if (!this.adjacencyList[vertex]) return null;
    while (this.adjacencyList[vertex].length > 0) {
      this.removeEdge(vertex, this.adjacencyList[vertex].pop());
    }
    delete this.adjacencyList[vertex];
  }
  DFS(start) {
    const result = [];
    const visited = {};
    let stack = [start];
    let currentList = [];
    let vertex;
    while (stack.length > 0) {
      vertex = stack.pop();
      if (!visited[vertex]) {
        result.push(vertex);
        visited[vertex] = true;
        currentList = this.adjacencyList[vertex].map((v) => v);
        stack = [...stack, ...currentList];
      }
    }
    return result;
  }
  BFS(start) {
    if (!this.adjacencyList[start]) return [];
    let queue = [start];
    let result = [];
    let vertex;
    let connectedList;
    const visited = {};
    while (queue.length > 0) {
      vertex = queue.shift();
      if (!visited[vertex]) {
        result.push(vertex);
        connectedList = this.adjacencyList[vertex];
        queue = [...queue, ...connectedList];
        visited[vertex] = true;
      }
    }
    return result;
  }
}

// const G = new Graph();
// G.addVertex("A");
// G.addVertex("B");
// G.addVertex("C");
// G.addVertex("D");
// G.addVertex("E");
// G.addEdge("A", "B");
// G.addEdge("B", "C");
// G.addEdge("C", "D");
// G.addEdge("D", "E");
// G.addEdge("E", "A");
// console.log("G--DFS", G.DFS("A"));
// console.log("G--BFS", G.BFS("A"));
// G.removeVertex("A");
// console.log(G.adjacencyList);
// console.log("G--BFS", G.BFS("A"));

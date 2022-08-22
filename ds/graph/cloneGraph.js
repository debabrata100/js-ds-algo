function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

var cloneGraph = function (node) {
  const vertexMap = new Map();
  const start = node;
  if (!start) return null;
  const queue = [start];
  vertexMap.set(start, new Node(start.val));
  while (queue.length > 0) {
    let currentVertex = queue.shift();
    for (neighbor of currentVertex.neighbors) {
      if (!vertexMap.get(neighbor)) {
        vertexMap.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }
      vertexMap.get(currentVertex).neighbors.push(vertexMap.get(neighbor));
    }
  }
  return vertexMap.get(start);
};
var cloneGraph2 = function (node) {
  var map = {};
  return traverse(node);

  function traverse(node) {
    if (!node) return node;
    if (!map.has(node)) {
      map.set(node, new Node(node.val));
      map.get(node).neighbors = node.neighbors.map(traverse);
    }
    return map.get(node);
  }
};
const root = new Node(1);
root.neighbors[0] = new Node(2);
root.neighbors[1] = new Node(4);
root.neighbors[0].neighbors[0] = new Node(3);
root.neighbors[0].neighbors[1] = root;
root.neighbors[0].neighbors[0].neighbors[0] = root.neighbors[1];
root.neighbors[0].neighbors[0].neighbors[1] = root.neighbors[0];
root.neighbors[1].neighbors[0] = root;
root.neighbors[1].neighbors[1] = root.neighbors[0].neighbors[0];
console.log(cloneGraph2(root));
// console.log(JSON.stringify(root));

function Node(val, children) {
  this.val = val === undefined ? 0 : val;
  this.children = children === undefined ? [] : children;
}

var cloneTree = function (root) {
  if (!root) return root;
  const vertexMap = new Map();
  const start = root;
  vertexMap.set(start, new Node(start.val));
  const queue = [start];
  while (queue.length > 0) {
    let currentVertex = queue.shift();
    for (let child of currentVertex.children) {
      if (!vertexMap.has(child)) {
        vertexMap.set(child, new Node(child.val));
        queue.push(child);
      }
      vertexMap.get(currentVertex).children.push(vertexMap.get(child));
    }
  }
  return vertexMap.get(start);
};

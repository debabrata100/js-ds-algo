var isValidSequence = function (root, arr, i = 0) {
  if (!root || root.val !== arr[i]) return false;
  if (i === arr.length - 1 && root.val === arr[i])
    return !root.left && !root.right;

  return (
    isValidSequence(root.left, arr, i + 1) ||
    isValidSequence(root.right, arr, i + 1)
  );
};

/*
    Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
    Output: true
*/

// Given the root node of a binary search tree (BST) and an integer k, write a function to find and return the k-th smallest value in the BST. The smallest value in the tree is 1.


function kthSmallestElementInABst(root, k) {

    let arr = [];
    function getSortedNode(node) {
      if (!node) return;
      getSortedNode(node.left);
      arr.push(node.val);
      getSortedNode(node.right);
    }
    getSortedNode(root);
    return arr[k-1]
    // throw 'Not implemented!';
  }

  r = {
    val: 7,
    left: {
        val:6,
        left: {
            val: 5,
            left: 9,
            right: null

        },
        right: null
    },
    right: {
        val: 4,
        left: null,
        right: null
    }
  }

  console.log(kthSmallestElementInABst(r, 2)) // [7,6,5,7,4] // answer should be 5
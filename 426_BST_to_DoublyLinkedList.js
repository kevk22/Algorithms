var treeToDoublyList = function (root) {
    if (!root) return root;

    let first = null;
    let prev = null;

    function inOrder(node) {
        if (!node) return;

        inOrder(node.left);

        if (!first) {
            first = node;
            prev = node;
        } else {
            node.left = prev;
            prev.right = node;
            prev = node;
        }

        inOrder(node.right)
    }


    inOrder(root);

    first.left = prev;
    prev.right = first;
    return first;
}

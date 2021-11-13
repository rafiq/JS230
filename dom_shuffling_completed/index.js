let topLayer = document.body.querySelector("body > div");

function walk(node) {
    let count = 0;
    if (node.hasChildNodes()) {
        let children = node.childNodes;

        for (let i = 0; i < children.length; i++ ) {
            count++;
            walk(children[i]);
        }
    }

    return [count, childrenNodesCounter(node)];
}

function childrenNodesCounter(node) {
    let count = 0;

    for (let i = 0; i < node.childNodes.length; i++) {
        count++;
        childrenNodesCounter(node.children[i]);
    }

    return count;
}
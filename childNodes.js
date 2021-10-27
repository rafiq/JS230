function walk(node) {
    let directChildCount = node.querySelector("HTML").childNodes.length;


    for (let child of node.childNodes) {t
        directChildCount += child.childNodes.length;
        walk(child);
    }
    return directChildCount;
}

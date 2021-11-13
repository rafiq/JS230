const traverse = function* (node = {})
{ yield node
  for (const child of node.childNodes)
    yield* traverse(child)
}

// function sliceTree(start,end) {
//     let result = [];
//     let node = document.getElementById(start);
//     if (end < start || !document.getElementById(end)) return undefined;

//     while (node) {
//         result.push(node.nodeName);
//         node = node.firstElementChild;
//     };

//     return result;
// }
function sliceTree(start,end) {
    if (end < start || !document.getElementById(end)) return undefined;
    let result = [];
    let node = document.getElementById(end);
    do {
        result.unshift(node.nodeName);
        node = node.parentElement;
    } while (node.nodeName !== "BODY" && node.id !== String(start));

    return result;
}
sliceTree(1, 4);//["ARTICLE", "HEADER", "SPAN", "A"]
sliceTree(1, 76);
sliceTree(1, 22);//["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
sliceTree(11, 19);//= ["SECTION", "P", "SPAN", "STRONG", "A"]

function sliceTree(startNode, endNode) {
    let res = [];
    let end = document.getElementById(endNode);
    let current = end;
    if (!end) return undefined;

    res.push(current.tagName);

    while (current.tagName !== 'BODY') {
      current = current.parentNode;
      res.unshift(current.tagName);
      if (current.id === String(startNode)) return res;
    }

    return undefined;
  }
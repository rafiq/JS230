document.addEventListener("DOMContentLoaded", () => {

  // function sliceTree(start,end) {
  //   let treeSlice = [];
  //   let myIds = Array(end - start + 1).fill().map((_, idx) => `[id="${start + idx}"]`).join(", ")
  //   // let myIds = new Array(Math.abs(end - start + 1)).fill(0).reduce((acc,curr,idx) => acc.push(idx + start),[])
  //   let list = document.querySelectorAll(myIds) || undefined
  //   return myIds
  //   if (start > end) return undefined
  //   // only elements = children
  //   // instance of body HTMLBodyElement
  //   while (start <= end) {
  //     let curr = document.getElementById(String(start))
  //     if (!curr) {
  //       return undefined
  //     } else {
  //       if (document.body.contains(curr)) {
  //         treeSlice.push(curr)
  //       }
  //     }

  //     Number(start)
  //     start += 1
  //   }
  //   return treeSlice
  // }
// I guess LS wanted us to make a slice where we only take the parent element of starting from the end and working our way up the tree, and not get the all the id's in between start and end...
  function sliceTree(start, end) {
    let endElement = document.getElementById(end);
    const startElement = document.getElementById(start);

    if (!startElement || !endElement) {
      return undefined;
    }

    const slicedTree = [];
    let currentElement;

    do {
      currentElement = endElement;
      slicedTree.unshift(currentElement.tagName);
      endElement = endElement.parentNode;
    } while (currentElement.id !== String(start) && endElement.tagName !== 'BODY');

    return (endElement.tagName === 'BODY' && currentElement.id !== String(start) ? undefined : slicedTree);
  }
console.log(

  sliceTree(1, 4),//["ARTICLE", "HEADER", "SPAN", "A"]
  sliceTree(1, 76),
  sliceTree(1, 22),//["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
  sliceTree(11, 19),//= ["SECTION", "P", "SPAN", "STRONG", "A"]
  sliceTree(2, 5),//undefined
 sliceTree(5, 4),// undefined
 sliceTree(1, 23),//["ARTICLE", "FOOTER"]
  );
})
// const traverse = function* (node = {})
// { yield node
//   for (const child of node.childNodes)
//     yield* traverse(child)
// }

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
// function sliceTree(start,end) {
//     if (end < start || !document.getElementById(end)) return undefined;
//     let result = [];
//     let node = document.getElementById(end);
//     do {
//         result.unshift(node.nodeName);
//         node = node.parentElement;
//     } while (node.nodeName !== "BODY" && node.id !== String(start));

//     return result;
// }

// function sliceTree(startNode, endNode) {
//     let res = [];
//     let end = document.getElementById(endNode);
//     let current = end;
//     if (!end) return undefined;

//     res.push(current.tagName);

//     while (current.tagName !== 'BODY') {
//       current = current.parentNode;
//       res.unshift(current.tagName);
//       if (current.id === String(startNode)) return res;
//     }

//     return undefined;
//   }
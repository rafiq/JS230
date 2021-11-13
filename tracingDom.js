// function traceDom(num) {
//     let result = [];
//     let count = 0;

//     for (let i = num; i > 0; i--) {
//         let node = document.getElementById(i);
//         if (node) {
//             if (node.hasChildNodes()) {
//                 let current = [];
//                 for (let child of node.children) {
//                     current.push(child.nodeName);
//                 }
//                 current.push(node.nodeName);
//                 result.push(current);
//             }
//         }
//     }

//     return JSON.stringify(result);
// }
// traceDom(22);
// window.onload = function() {

//     function domTreeTracer(id) {
//         let currentElement = document.getElementById(id);
//         let parentElement;
//         const domTree = [];

//         do {
//             parentElement = currentElement.parentNode;
//             let children = getTagNames(parentElement.children);
//             domTree.push(children);

//             currentElement = parentElement;
//         } while (parentElement.tagName !== 'BODY');
//         console.log(domTree)
//         return domTree;
//     }

//     function getTagNames(htmlCollection) {
//         const elementsArray = Array.from(htmlCollection);
//         return elementsArray.map(({tagName}) => tagName);
//     }

// }

window.onload = function() {
    function domTreeTracer(id) {
      let tree = [];
      let theElement = document.getElementById(id);

      do {
        let siblings = [];

        for (child of theElement.parentElement.children) {
          siblings.push(child.tagName);
        }

        tree.push(siblings);
        theElement = theElement.parentElement;
      } while (theElement !== document.body);

      return tree;
    }

    console.log(domTreeTracer(1));
    console.log(domTreeTracer(2));
    console.log(domTreeTracer(22));
  }

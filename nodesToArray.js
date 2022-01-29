document.addEventListener("DOMContentLoaded", () => {


    const walk = (node, callback) => {
        callback(node)

        for (let child of node.children) {
            walk(child,callback)
        }
    }

    // let result = [];

    // function getGenerationElements(node) {
    //     while (node.children) {

    //         let temp = [];
    //         let children = [...node.parentNode.children]

    //         result.push(node.tagName);
    //         temp.push(children.map(el => el.tagName));
    //         result.push(temp)

    //         for (let i = 0; i < node.children.length; i++) {
    //             getGenerationElements(node.children[i]);
    //         }
    //     }
    //     result.push([]);
    //     return result
    //     // if (node.tagName === "BODY") {
    //     //     return result
    //     // }

    //     // node = node.parentNode;
    // }
    function nodesToArr(node = document.body) {
        let parentName = node.tagName;
        let children = Array.prototype.slice.call(node.children) || [];
        return [parentName, children.map(nodesToArr)];
      }


    // function nodesToArr(parent = document.body) {
    //     const nodesArr = [parent.tagName, []];

    //     for (let child of parent.children) {
    //       nodesArr[1].push(nodesToArr(child));
    //     }

    //     return nodesArr;
    //   }
    console.log(
        // getGenerationElements(document.body),
        nodesToArr(),
        document.body
    );
})
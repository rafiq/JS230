document.addEventListener("DOMContentLoaded", () => {

    function nodeSwap(node1, node2) {
        node1 = document.getElementById(String(node1))
        node2 = document.getElementById(String(node2))

        if (!node1 || !node2 || node1.contains(node2) || node2.contains(node1)) return undefined;

        let parent1 = node1.parentNode;
        let sibling1 = node1.nextSibling === node2 ? node1 : node1.nextSibling;

        node2.parentNode.insertBefore(node1,node2);
        parent1.insertBefore(node2, sibling1);

        return document.body
    }
// From Stackoverflow which is a pretty smooth answer. There were others that were shorter but less easily understood.
    function swapElements(obj1, obj2) {
        // create marker element and insert it where obj1 is
        var temp = document.createElement("div");
        obj1.parentNode.insertBefore(temp, obj1);

        // move obj1 to right before obj2
        obj2.parentNode.insertBefore(obj1, obj2);

        // move obj2 to right before where obj1 used to be
        temp.parentNode.insertBefore(obj2, temp);

        // remove temporary marker node
        temp.parentNode.removeChild(temp);
    }


    console.log(
        nodeSwap(3, 1),
        nodeSwap(7, 9),
    );
})
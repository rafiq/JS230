// import "practiceProbsDOM1.HTML";

// let html = document.childNodes[1]; // skip doctype
// let body = html.lastChild;         // skip head and text nodes
// let heading = body.childNodes[1];  // skip text node
// heading.style.color = 'red';
// heading.style.fontSize = '48px';
<!doctype html>
<html lang="en-US">
  <head>
    <title>On the River</title>
  </head>
  <body>
    <h1>On The River</h1>
    <p>The sun is low</p>
    <p>The waters flow</p>
  </body>
</html>

function walk(node, callback) {
    callback(node);

    for (let index = 0; index < node.childNodes.length; index += 1) {
      walk(node.childNodes[index], callback);
    }
  }
let result = [];

walk(document, node => {
    if (node.nodeName === "P") {
        result.push(node);
    }
})
console.log(result)
//   console.log(
//       walk(document.body,node => {
//           if (node === "color") node.color = "red";
//           if (node === "On the River") node.font = 48px;
//       })
//   );

// #2

// let count = 0;

// walk(document, node => {
//     if (node.nodename === "P")  count++;
// })

// console.log(count)

// #3
// walk(document, node => {
//     let result = [];

//     if (node.nodeName === "P") {
//         result.push(node.firstChild.data.split("")[0]);
//     }
//     console.log(result.join(""));
// })

// let words = [];
// walk(document, node => {
//   if (node.nodeName === 'P') {
//     let text = node.firstChild.data.trim();
//     let firstWord = text.split(' ')[0];
//     words.push(firstWord);
//   }
// });

// console.log(words);  // ["A", "The", "The", "Where", "And"]

// $4
// let first = true;
// walk(document, node => {
//   if (node.nodeName === 'P') {
//     if (first) {
//       first = false;
//     } else {
//       node.classList.add('stanza');
//     }
//   }
// });

// #5
// let count = 0;

// walk(document, node => {
//     if (node.nodName === "A") {
//         count++
//     }

// })

// let images = [];
// walk(document, node => {
//   if (node.nodeName === 'IMG') {
//     images.push(node);
//   }
// });

// console.log(images.length);                      // 48 total images

// let pngCount = images.filter(img => img.getAttribute('src').match(/png$/)).length;

// console.log(pngCount);                           // 23 images in png format

// #6
// walk(document, node => {
//     if (node.nodeName === 'A') {
//       node.style.color = 'red';
//     }
//   });


<!doctype html>
<html lang="en-US">
  <head>
    <title>On the River</title>
  </head>
  <body>
    <div id="page1">
      <div class="intro">
        <p>The sun is low,</p>
      </div>
      <p>The waters flow,</p>
    </div>
    <div id="page2">
      <div class="intro">
        <p>My boat is dancing to and fro.</p>
      </div>
      <p>The eve is still,</p>
    </div>
    <div id="page3">
      <div class="intro">
        <p>Yet from the hill</p>
      </div>
      <p>The killdeer echoes loud and shrill.</p>
    </div>
  </body>
</html>

function addClass(doc) {

    for (let index = 0; index < nodes.length; index++) {
        if (nodes[index] === "P") {
            node[index].addClass("article-text")
        }
    }

    return doc;
}
function getElementById(node) {
    let result = [];

    for (let index = 0; index < nodes.length; index++) {

        if (node instanceof HTMLParagraphElement) {
            result.push(node);
        }
        getElementById(nodes[index]);
    }

}
function addText(params) {

}
function addClassToParagraphs(node) {
    if (node instanceof HTMLParagraphElement) {
      node.classList.add("article-text");
    }

    let nodes = node.childNodes;
    for (let index = 0; index < nodes.length; index += 1) {
      addClassToParagraphs(nodes[index]);
    }
  }

  addClassToParagraphs(document.body);

  function getElementsByTagName(tagName) {
    let matches = [];

    walk(document.body, (node) => {
      if (node.nodeName.toLowerCase() === tagName) {
        matches.push(node);
      }
    });

    return matches;
  }
let result = Array.prototype.slice.call(document.getElementsByTagName("p"));

  getElementsByTagName("p").forEach((paragraph) =>
    paragraph.classList.add("article-text")
  );
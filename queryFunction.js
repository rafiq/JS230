// previous approach
let intros = document.getElementsByClassName("intro");
for (let index = 0; index < intros.length; index += 1) {
  let paragraphs = intros[index].getElementsByTagName("p");

  for (let p = 0; p < paragraphs.length; p += 1) {
    paragraphs[p].classList.add("article-text");
  }
}

// using querySelectorAll
let paragraphs = document.querySelectorAll(".intro p");
for (let index = 0; index < paragraphs.length; index += 1) {
  paragraphs[index].classList.add("article-text");
}
let result = [];
for (let i = 0; i < h2Tags.length; i += 1) {
    let content = h2Tags[i].textContent;
    result.push(content.split(" ").length)
  }

  let content = document.getElementsByClassName("toctitle");
  let y = document.getElementById("toc");
  let x = document.querySelector("#toc");
  let z = document.querySelectorAll("#toc a");
  for (let i = 0; i < z.length; i++) {
      if (i % 2 === 1) {
          z[i].style.color = "green";
      }
  }
  let a = document.querySelectorAll("#thumbcaption");
  let result = [];
  for (let i = 0; i < a.length; i++) {
      result.push(a[i].textContent.trim())
  }
result;
//   find all links
// make iterable and change odd indexes to green


// find all keys aka domains
//make an object for results
//put the keys in object with the values aka groups

let container = document.querySelector("tbody");
let objectMatches = {};
for (let i = 0; i < container.lenght; i++) {
  objectMatches[container[i].textContent] = container[i].textContent;
}
objectMatches;

let keys = ['Kingdom', 'Phylum', 'Clade', 'Class', 'Order', 'Suborder', 'Family',
            'Genus', 'Species'];
let classification = {};
let tds = document.querySelectorAll('.infobox td');
let cell;
let link;

for (index = 0; index < tds.length; index += 1) {
  cell = tds[index];

  keys.forEach(key => {
    if (cell.textContent.indexOf(key) !== -1) {
      link = cell.nextElementSibling.firstElementChild;
      classification[key] = link.textContent;
    }
  });
}

console.log(classification);
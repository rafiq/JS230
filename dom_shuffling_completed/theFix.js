// const { doc } = require("prettier");

let header = document.querySelector("body > header");
let h1 = document.querySelector("main > h1");

// let main = document.querySelector("body > main");
// let nav = document.querySelector("body > main > header > nav");
// main.insertBefore(header, h1);
// header.insertBefore(h1,nav);
// header.insertBefore(h1, header.firstChild);
// document.body.insertBefore(header, document.body.firstChild);

// document.querySelector("header").remove();
// body.insertBefore(header,main);

// let fig2 = document.body.querySelector('img[alt="The baby mop"]')
// console.log(fig2)

let header = document.querySelector("body > header");
let h1 = document.querySelector("main > h1");
header.insertBefore(h1, header.firstChild);
document.body.insertBefore(header, document.body.firstChild);

let [ chinStickFigure, babyMopFigure ] = document.querySelectorAll("figure");

let babyMopImage = chinStickFigure.querySelector("img");
let chinStickImage = babyMopFigure.querySelector("img");
chinStickFigure.insertBefore(chinStickImage, chinStickFigure.firstChild);
babyMopFigure.insertBefore(babyMopImage, babyMopFigure.firstChild);

let article = document.querySelector("article");
article.insertBefore(chinStickFigure, null);
article.insertBefore(babyMopFigure, null);
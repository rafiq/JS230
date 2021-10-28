document.getElementById("toggle").onclick = e => {
    e.preventDefault();

    let notice = document.getElementById("notice");

    if (notice.className === "hidden") {
        notice.className = "visible";
    } else {
        notice.className = "hidden";
    }
}

document.getElementById("notice").onclick = e => {
    e.preventDefault();

    e.currentTarget.setAttribute("class", "hidden");


}

let match = document.getElementById("multiplication");

match.textContent = "What's 13 times 9? 117"

document.querySelector("body").className = "styled";
function toggleVisible(e) {
    e.preventDefault();

    let match = document.body.querySelector(".hidden");

    return match.className = ".visible";
}
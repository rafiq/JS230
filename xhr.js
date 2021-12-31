const todo = {
    title: "Some really important work to finish"
};

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        if (!res.ok) {
            throw new Error("Could not reach website.");
        }
        return res.json();
    })
    .then(json => {
        console.log(json.length,json);
        let container = document.querySelector("div")
        let post = document.createElement("div")
        post.innerHTML = JSON.stringify(json.map(obj => obj.title).join(" "))
        container.append(post)

    })
    .catch(err => console.log(err));


// fetch("https://jsonplaceholder.typicode.com/posts/1")
    // .then(res => res.json())
    // .then(json => console.log(json))
    // .catch(err => console.log(err))

// fetch("https://jsonplaceholder.typicode.com/todos", {
//     method:"POST",
//     body: JSON.stringify(todo),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
//     .then(res => res.json())
//     .then(json => {
//         console.log(json);
//     })




    // let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
// xhr.send();

// xhr.onload = function() {
//     console.log(xhr.response);
// }
const https = require("https");
const options = {
    hostname: "https://jsonplaceholder.typicode.com/",
    port: 443,
    path: "posts",
    method: "GET"
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", d => {
        process.stdout.write(d)
    })
})

req.on("error",err => {
    console.log(err);
})

req.end();

// const Http = new XMLHttpRequest();
// const url = "https://jsonplaceholder.typicode.com/posts";
// Http.open("GET",url);
// Http.send();

// Http.onreadystatechange = (e) => {
//     console.log(Http.responseText);
// }
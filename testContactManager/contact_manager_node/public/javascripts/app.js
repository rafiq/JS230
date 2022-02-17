console.log("hello");


document.addEventListener("load", () => {
    let request = new XMLHttpRequest()

    request.open("POST", "/api/contacts")
    let data = {
        full_name: "asdf;lkj",
        email: "as@gm.com",
        phone_number: "23432535",
        tags: "teacher"
    }
    let json = JSON.stringify(data);

    request.send(json)
    request.addEventListener("load", () => {
        console.log(request.response);

    })
})
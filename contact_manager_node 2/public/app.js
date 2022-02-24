


document.addEventListener("DOMContentLoaded", () => {
  let homeDiv = document.querySelectorAll('.container')[1];
const addContactButton = document.getElementById("button")
const mainContainer = document.getElementsByClassName("row")[0]
const submitButton = document.querySelector('[value="Submit"]')
let hasData = false;
let container = document.querySelector('.open-login-btn');
let form = document.querySelector("#form-template");

// let template = Handlebars.compile(form);

const getFilteredData = (array, tagWord) => {
    return array.filter(obj => {
        if (obj.tags) {
            let tag = obj.tags;
            // collection.map(c => c.id).includes(contactId)
            return tag.includes(tagWord)
        }
    })
}
function formDataToJson(formData) {
    const json = {tags:""};
    formData.forEach((value,key) => json[key] = value)
    return json
}


function editForm(element) {
  let parentLi = element.parentElement.parentElement;
  console.log(parentLi);
  }
  function deleteButton(x) {
    var targetElement = x.parentElement.parentElement;
    console.log(targetElement);
    targetElement.parentElement.removeChild(targetElement);
  }


  function populateContacts(data) {
    console.log("World", data);
    console.log("container",container);
    let source = document.getElementById('ul-template').innerHTML
    console.log("source", source);
    template = Handlebars.compile(source);
    let html = template({data: data});

    container.innerHTML += html;
    template = Handlebars.compile(document.getElementById("form2-template").innerHTML);
    container.innerHTML += template()
  }

  // (function() {
  //   // get data
  //   let data = false;
  //   console.log("IIFE ran...");
  //   let userData ;
  //   const getCurrentContactsData = function() {
  //     let request = new XMLHttpRequest();

  //     request.open("GET", "http://localhost:3000/api/contacts");
  //     request.responseType = "json"
  //     request.send()

  //     request.addEventListener("load", e => {
  //       userData =  request.response
  //       hasData = true;

  //       if (userData) {
  //         let source = document.getElementById('ul-template').innerHTML
  //         template = Handlebars.compile(source);
  //         let html = template({data: data});
  //         let container = document.querySelector('.col-xs-12 main-container');
  //         container.innerHTML = template(html)
  //         // populateContacts(userData);
  //         // console.log(submitButton);

  //       }
  //     })
  //   }
  //   getCurrentContactsData()
  // })()
})
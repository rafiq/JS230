let cursorInterval;

document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');
  let content = document.querySelector(".content")

  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');
    console.log(textField.classList.contains("cursor"));
    // if (!textField.classList.contains("cursor")) {
      cursorInterval = cursorInterval || setInterval(() => textField.classList.toggle('cursor'), 500);
    // }
    // console.log(content);
  });

  document.addEventListener("keydown",e => {
    let isFocused = textField.classList.contains("focused");
    if (isFocused && e.key !== "Backspace") {
      content.textContent += e.key;

      } else if (e.key === "Backspace" && isFocused) {
        let curr = content.textContent.split("");
        content.textContent = curr.slice(0,-1).join("");
      }
    })

  });

  document.addEventListener('click', event => {

  clearInterval(cursorInterval);
  let textField = document.querySelector('.text-field');
  textField.classList.remove('focused');
  textField.classList.remove('cursor');
});



// let cursorInterval;
// let focusedTextField;

// document.addEventListener('DOMContentLoaded', () => {
//   let textField = document.querySelector('.text-field');

//   textField.addEventListener('click', event => {
//     event.stopPropagation();

//     focusedTextField = textField;
//     textField.classList.add('focused');

//     cursorInterval = cursorInterval || setInterval(() => textField.classList.toggle('cursor'), 500);
//   });
// });

// document.addEventListener('keydown', event => {
//   if (focusedTextField) {
//     let contentDiv = focusedTextField.querySelector('.content');
//     if (event.key === 'Backspace') {
//       contentDiv.textContent = contentDiv.textContent.slice(0, contentDiv.textContent.length - 1);
//     } else if (event.key.length === 1) {
//       contentDiv.textContent = contentDiv.textContent + event.key;
//     }
//   }
// });

// document.addEventListener('click', event => {
//   clearInterval(cursorInterval);
//   cursorInterval = null;
//   if (focusedTextField) {
//     focusedTextField.classList.remove('focused');
//     focusedTextField.classList.remove('cursor');
//     focusedTextField = null;
//   }
// });

// // let cursorInterval;
// // let focusedTextField;

// // document.addEventListener('DOMContentLoaded', () => {
// //   let textField = document.querySelector('.text-field');

// //   textField.addEventListener('click', event => {
// //     event.stopPropagation();

// //     focusedTextField = textField;
// //     textField.classList.add('focused');

// //     cursorInterval = setInterval(() => textField.classList.toggle('cursor'), 500);
// //   });
// // });

// // document.addEventListener('keydown', event => {
// //   if (focusedTextField) {
// //     let contentDiv = focusedTextField.querySelector('.content');
// //     if (event.key === 'Backspace') {
// //       contentDiv.textContent = contentDiv.textContent.slice(0, contentDiv.textContent.length - 1);
// //     } else if (event.key.length === 1) {
// //       contentDiv.textContent = contentDiv.textContent + event.key;
// //     }
// //   }
// // });

// // document.addEventListener('click', event => {
// //   clearInterval(cursorInterval);
// //   if (focusedTextField) {
// //     focusedTextField.classList.remove('focused');
// //     focusedTextField.classList.remove('cursor');
// //     focusedTextField = null;
// //   }
// // });


// // // let cursorInterval;
// // // let focusedTextField;

// // // document.addEventListener('DOMContentLoaded', () => {
// // //     let textElement = document.querySelector('.text-field');
// // //     let content = document.querySelector('.content');

// // //     textElement.addEventListener('click', event => {
// // //         event.stopPropagation();

// // //         focusedTextField = textField;
// // //         textElement.classList.add('focused')

// // //         cursorInterval = setInterval(() => {
// // //             textElement.classList.toggle('cursor')
// // //         }, 500);
// // //     })
// // // })
// // // document.addEventListener('keydown', event => {
// // //     if (textElement.getAttribute('focused')) {
// // //         let content = document.querySelector('.content');
// // //         content.textContent += event.key;
// // //     }
// // // })

// // // document.addEventListener('click', event => {
// // //     clearInterval(cursorInterval);
// // //     let textElement = document.querySelector('.text-field');
// // //     textElement.classList.remove('focused');
// // //     textElement.classList.remove('cursor');
// // //     textElement = null;
// // // })
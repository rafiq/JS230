// function delayLog(limit) {
//     let count = 1000;

//     for (let i = 1; i <= limit; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, count += i);
//         // count += 1000
//     }
// }
// delayLog(10);

// setTimeout(() => {          1
//     console.log('Once');    5
//   }, 1000);

//   setTimeout(() => {        2
//     console.log('upon');    7
//   }, 3000);

//   setTimeout(() => {         3
//     console.log('a');        6
//   }, 2000);

//   setTimeout(() => {         4
//     console.log('time');     8
//   }, 4000);


//   setTimeout(() => {     1
//     setTimeout(() => {
//       q();
//     }, 15);

//     d();

//     setTimeout(() => {
//       n();
//     }, 5);

//     z();
//   }, 10);

//   setTimeout(() => {     2
//     s();
//   }, 20);

//   setTimeout(() => {    3
//     f();
//   });

//   g();                   4
//   g f  d  z  n q s
//   g, f, d, z, n, s, q

function afterNSeconds(time, callback) {
    if (time < 1000) time *= 1000;
    setTimeout(() => {
        return callback();
    }, time);

    return false;
}

console.log(afterNSeconds(5,() => console.log("Hi")))
{/* <div class="x">
  <div class="horizontal"></div>
  <div class="vertical"></div>
</div>  */}

// let drawingBoard = document.querySelector(".x");

// drawingBoard.addEventListener("mousemove", event => {
//     drawLine(context, x, y, e.offsetX, e.offsetY);
//     x = e.offsetX;
//     y = e.offsetY;

// })
// function drawLine(context, x1, y1, x2, y2) {
//     context.beginPath();
//     context.strokeStyle = 'black';
//     context.lineWidth = 1;
//     context.moveTo(x1, y1);
//     context.lineTo(x2, y2);
//     context.stroke();
//     context.closePath();
//   }

document.addEventListener('mousemove', event => {
    let x = document.querySelector('.x');
    x.style.left = String(event.clientX) + 'px';
    x.style.top = String(event.clientY) + 'px';
  });

  document.addEventListener("keyup", event => {
    let x = document.querySelector('.x');
      switch (event.key) {
          case "b":
              x.style.background = "blue";
              break;
          case "g":
              x.style.background = "green";
              break;
          case "r":
              x.style.background = "red";
              break;

          default:
              break;
      }
  })

  document.addEventListener('keyup', event => {
    let key = event.key;
    let color;

    if (key === 'r') {
      color = 'red';
    } else if (key === 'g') {
      color = 'green';
    } else if (key === 'b') {
      color = 'blue';
    }

    if (color) {
      let x = document.querySelector('.x');
      for (let index = 0; index < x.children.length; index += 1) {
        var child = x.children[index];
        child.style.background = color;
      }
    }
  });
  let maxLength = document.querySelector("textarea").maxLength;

  document.querySelector("composer");
  let div = document.getElementsByClassName("composer")
  div.addEventListener("keyup",event => {
      let count = document.querySelector("textarea").textContent.textLength;
      let text = document.querySelector("counter");
      text.textContent = count + " characters remaining"
    })

    let log = document.querySelector('p');

    document.addEventListener('keyup', logKey);


    function logKey(e) {
    let minLength = document.querySelector("textarea").minLength;
    let textLength = document.querySelector("textarea").value.length;
    let count = 140 - textLength;
  log.textContent = `${count} characters remaining`;
//   if (count > maxLength) {
//       log.style.color = "red";
//   }
  if (count < minLength) {
    log.style.color = "red";
  }
}

document.addEventListener('DOMContentLoaded', () => {
    let composer = document.querySelector('.composer');
    let textarea = composer.querySelector('textarea');
    let counter = composer.querySelector('.counter');
    let button = composer.querySelector('button');

    function updateCounter() {
      let length = textarea.value.length;
      let remaining = 140 - length;
      let message = `${remaining.toString()} characters remaining`;
      let invalid = remaining < 0;

      textarea.classList.toggle('invalid', invalid);
      button.disabled = invalid;

      counter.textContent = message;
    }

    textarea.addEventListener('keyup', updateCounter);

    updateCounter();
  });
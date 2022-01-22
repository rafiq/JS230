// function callback1() {
//     console.log('callback1');
//   }

//   function callback2() {
//     console.log('callback2');
//   }

//   function callback3() {
//     console.log('callback3');
//   }
// function randomizer(callbacks) {
//     for (let i = 0; i < arguments.length; i++) {


//         console.log(arguments[i]());
//     }
//   }

  // randomizer(callback1, callback2, callback3);


function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

// function randomizer(callbacks) {
//   let args = arguments;
//   let len =  2 * args.length;
//   let randomNums = []

//   while (randomNums.length < args.length)   {
//       let randomNum = Math.floor(Math.random() * len );
//       if (randomNums.includes(randomNum)) continue
//       else randomNums.push(randomNum);
//   }

//   let j = 1
//   let k = -1
//   let t = setInterval(() => {
//       if (randomNums.includes(j)) {
//           k++;
//           arguments[k]();
//       } else {
//           console.log(j)
//       }
//       j++
//   }, (1000));

//       setTimeout(() => {
//           clearInterval(t)
//       },(len + 1) * 1000);

//   return randomNums;
// }

function assignValuesAtRandom(array, values) {
  let max = array.length;

  values.forEach(value => {
    let idx;
    while (true) {
      idx = Math.floor(Math.random() * max);

      if (array[idx] === undefined) {
        array[idx] = value;
        break;
      }
    }
  });

  return array;
}

function randomizer(...callbacks) {
  let randomized = new Array(callbacks.length * 2).fill(undefined);

  assignValuesAtRandom(randomized, callbacks);

  randomized.forEach((callback, idx) => {
    let seconds = idx + 1;
    setTimeout(() => {
      if (callback) {
        callback();
      } else {
        console.log(seconds);
      }
    }, seconds * 1000);
  });
}
console.log(
  randomizer(callback1, callback2, callback3),
);

//   // Output:
//   // 1
//   // 2
//   // "callback2"
//   // 3
//   // "callback3"
//   // 4
//   // 5
//   // "callback1"
//   // 6
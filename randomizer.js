function callback1() {
    console.log('callback1');
  }

  function callback2() {
    console.log('callback2');
  }

  function callback3() {
    console.log('callback3');
  }

  function randomizer(callbacks) {
    let args = arguments;
    let len =  2 * args.length;
    let randomNums = []

    while (randomNums.length < args.length)   {
        let randomNum = Math.floor(Math.random() * len );
        if (randomNums.includes(randomNum)) continue
        else randomNums.push(randomNum);
    }

    let j = 1
    let k = -1
    let t = setInterval(() => {
        if (randomNums.includes(j)) {
            k++;
            arguments[k]();
        } else {
            console.log(j)
        }
        j++
    }, (1000));

        setTimeout(() => {
            clearInterval(t)
        },(len + 1) * 1000);

    return randomNums;
  }
  console.log(

      randomizer(callback1, callback2, callback3),
      );

  // Output:
  // 1
  // 2
  // "callback2"
  // 3
  // "callback3"
  // 4
  // 5
  // "callback1"
  // 6
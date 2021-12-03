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

    for (let i = 0; i < args.length; i++) {
        let randomNum = Math.floor(Math.random() * len + 1);
        randomNums.push(randomNum);
    }

    let j = 1
    let t = setInterval(() => {

        let temp = randomNums.pop();

        if (randomNums.includes(j)) {
            console.log(randomNums[randomNums.indexOf(j)]);

        }
        while (randomNums) {
            if (j === temp) {
                temp = randomNums.pop();
            } else {
                console.log(j)
            }
            j++
        }
    }, (1000));

        setTimeout(() => {
            clearInterval(t)
        },(len + 1) * 1000);

    return len;
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
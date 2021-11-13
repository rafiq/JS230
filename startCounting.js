let runningFunc;

function startCounting() {
    let count = 0;
     runningFunc = setInterval(() => {
        console.log(count += 1)
    }, 1000);
    // count++;
}
function stopCounting () {
    return clearInterval(runningFunc);
}
startCounting();
stopCounting(runningFunc)
// let identifier = startCounting();

// function stopCounting(func) {

//     let runningFunc = setInterval(() => {

//     }, 1000);

//     return clearInterval(runningFunc);
// }

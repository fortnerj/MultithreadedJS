// worker.js
function calculate() {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
        result += i;
    }
    return result;
}
postMessage(calculate());

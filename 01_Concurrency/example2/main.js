// main.js
const worker = new Worker('worker.js');
worker.onmessage = event => {
    console.log(event.data);
};


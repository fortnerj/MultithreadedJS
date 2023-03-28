// main.js 
const worker = new Worker('worker.js');

worker.postMessage('Hello, worker!');

worker.onmessage = (event) => {
    console.log(`Worker says: ${event.data}`);
};


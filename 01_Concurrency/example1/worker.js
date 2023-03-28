// worker.js 
onmessage = (event) => {
    console.log(`Main thread says: ${event.data}`);

    postMessage('Hello, main thread!');
};


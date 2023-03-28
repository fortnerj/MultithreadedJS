// main.js
// start worker threads
const sharedBuffer = new SharedArrayBuffer(4);
const sharedArray = new Int32Array(sharedBuffer);
const sharedIndex = 0;
const sharedValue = 5;

// initialize the shared memory location to 0
Atomics.store(sharedArray, sharedIndex, sharedValue); 

// start worker threads
const worker1 = new Worker("worker1.js");
const worker2 = new Worker("worker2.js");

worker1.postMessage(sharedBuffer);

// listen for messages from worker threads
worker1.onmessage = (event) => {
  console.log(`Worker 1 results: ${event.data}`);
};

worker2.postMessage(sharedBuffer);

// listen for messages from worker threads
worker2.onmessage = () => {
  const results = Atomics.load(sharedArray, sharedIndex);
  console.log('Value at index 0 after updates: ', results);
};


console.log("Main thread is waiting for worker threads to update the shared memory location...");

// // if (!crossOriginIsolated) {
// //     SharedArrayBuffer = ArrayBuffer;
// // }


// // main.js
// // Create a SharedArrayBuffer that will be shared across threads
// const sharedBuffer = new SharedArrayBuffer(4);

// // Create a typed array view of the buffer
// const sharedArray = new Int32Array(sharedBuffer);
// const sharedIndex = 0;
// const sharedValue = 5;

// // Create two worker threads that will manipulate the shared buffer
// const worker1 = new Worker("worker1.js");
// const worker2 = new Worker("worker2.js");




// // Initialize the shared integer to 500
// sharedArray[0] = 500;

// // Send the shared buffer to the worker threads
// worker1.postMessage(sharedBuffer);
// worker2.postMessage(sharedBuffer);

// // Listen for messages from the worker threads
// worker1.onmessage = (event) => {
//   console.log(`Worker 1 incremented the shared integer. New value: ${event.data}`);
// };

// worker2.onmessage = (event) => {
//   console.log(`Worker 2 decremented the shared integer. New value: ${event.data}`);
// };

// main.js
// Create a SharedArrayBuffer that will be shared across threads
const sharedBuffer = new SharedArrayBuffer(4);

// Create a typed array view of the buffer
const sharedArray = new Int32Array(sharedBuffer);
const sharedIndex = 0;
const sharedValue = 5;

// Create a Mutex object
const mutex = new Mutex();

// Create two worker threads that will manipulate the shared buffer
const worker1 = new Worker("03_Lock_API/worker1.js");
const worker2 = new Worker("03_Lock_API/worker2.js");

// Initialize the shared integer to 500
sharedArray[0] = 500;

// Send the shared buffer to the worker threads
worker1.postMessage(sharedBuffer);
worker2.postMessage(sharedBuffer);

// Listen for messages from the worker threads
worker1.onmessage = (event) => {
console.log(`Worker 1 incremented the shared integer. New value: ${event.data}`);
};

worker2.onmessage = (event) => {
console.log(`Worker 2 decremented the shared integer. New value: ${event.data}`);
};
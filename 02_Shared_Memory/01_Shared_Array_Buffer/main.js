// if (!crossOriginIsolated) {
//     SharedArrayBuffer = ArrayBuffer;
// }

// Create a worker that will access the SharedArrayBuffer
const worker = new Worker('worker.js');

// Create a SharedArrayBuffer
const sharedBuffer = new SharedArrayBuffer(40);

// Create a view into the SharedArrayBuffer
const sab = new Int32Array(sharedBuffer);




// Set values in the SharedArrayBuffer
sab[0] = 10;
sab[1] = 20;
sab[2] = 30;
sab[3] = 40;

// Send the SharedArrayBuffer to the worker
worker.postMessage(sab);

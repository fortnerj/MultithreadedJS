// worker2.js
onmessage = (event) => {
  console.log("Worker 2 received data");
  const sharedBuffer = event.data;
  const sharedArray = new Int32Array(sharedBuffer);
  const sharedIndex = 0;
  
  // Wakes up worker1 thread that is waiting on the given index of the array.
  Atomics.notify(sharedArray, sharedIndex);

  // Perform operation on the shared value
  const result = sharedArray[sharedIndex] * 3;

  Atomics.store(sharedArray, sharedIndex, result);
  // send result back to main thread 
  postMessage(result); 
};

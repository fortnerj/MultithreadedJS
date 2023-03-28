// worker1.js
onmessage = (event) => {
  console.log("Worker 1 received data");
  const sharedBuffer = event.data;
  const sharedArray = new Int32Array(sharedBuffer);
  const sharedIndex = 0;
  
  // Perform operation on the shared value
  const result = sharedArray[sharedIndex] * 2;

  Atomics.store(sharedArray, sharedIndex, result); 

  // When the value at the sharedIndex in the array is equal to the provided value, the current thread is put to sleep causing execution to be suspended
  Atomics.wait(sharedArray, sharedIndex, 10);

  // send result back to main thread
  postMessage(result);

};
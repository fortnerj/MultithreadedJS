// // worker1.js
// onmessage = (event) => {
//   const sharedBuffer = event.data;
//   const sharedArray = new Int32Array(sharedBuffer);
//   const sharedIndex = 0;

//   // Increment the shared integer using Atomics
//   Atomics.add(sharedArray, sharedIndex, 50);

//   // Send the new value of the shared integer back to the main thread
//   postMessage(sharedArray[sharedIndex]);
// };

// worker1.js
onmessage = async (event) => {
  const sharedBuffer = event.data;
  const sharedArray = new Int32Array(sharedBuffer);
  const sharedIndex = 0;
  
  // Acquire the lock
  await mutex.acquire();
  
  // Increment the shared integer
  sharedArray[sharedIndex] += 50;
  
  // Release the lock
  mutex.release();
  
  // Send the new value of the shared integer back to the main thread
  postMessage(sharedArray[sharedIndex]);
  };
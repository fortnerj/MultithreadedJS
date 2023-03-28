// Create a Float32Array with 10 million elements
const data = new Float32Array(10000000); 
for (let i = 0; i < data.length; i++) {
  // Fill the array with random values between 0 and 100
  data[i] = Math.random() * 100; 
}

// create a new Web Worker
const worker = new Worker('worker.js');
worker.postMessage(data);

worker.onmessage = (event) => {
    const sum = event.data;
    console.log('The sum of the data is:', sum);
  };
  
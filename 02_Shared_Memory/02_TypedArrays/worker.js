// worker.js
onmessage = (event) => {
    const data = event.data;
  
    // Perform calculations on the data
    let sum = 0;

    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
  
    // Send the result back to the main thread
    postMessage(sum);
}
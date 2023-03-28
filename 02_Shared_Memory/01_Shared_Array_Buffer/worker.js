// worker.js

// Listen for the SharedArrayBuffer
addEventListener('message', (event) => {
    const sharedBuffer = event.data;
  
    // Create a view into the SharedArrayBuffer
    const view = new Int32Array(sharedBuffer);
  
    // Log the values in the SharedArrayBuffer
    console.log(view[0]); // 10
    console.log(view[1]); // 20
    console.log(view[2]); // 30
    console.log(view[3]); // 40
  
    // Modify a value in the SharedArrayBuffer
    view[0] = 100;
    console.log(view[0]); // 100
  });
  
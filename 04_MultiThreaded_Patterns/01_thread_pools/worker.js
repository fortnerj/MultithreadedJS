const tasks = {
  task1: () => {
    return new Promise(resolve => {
      resolve(1+0);
    })
  },
  task2: () => {
    return new Promise(resolve => {
      resolve(1+1);
    })
  },
  task3: () => {
    return new Promise(resolve => {
      resolve(1+2);
    })
  }
};

onmessage = event => {
  const { taskId, taskName } = event.data;
  const task = tasks[taskName];
  task().then(result => {
    postMessage({ result, taskId });
  });
};

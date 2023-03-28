function createThreadPool(size) {
  const workers = [];
  const taskQueue = [];
  let activeTasks = 0;

  // create the worker threads and set up message listeners
  for (let i = 0; i < size; i++) {
    const worker = new Worker('worker.js');
    worker.busy = false;
    workers.push(worker);
    worker.onmessage = event => {
      const { result, taskId } = event.data;
      console.log(`Task ${taskId} completed with result ${result}`);
      activeTasks--;
      worker.busy = false;
      if (taskQueue.length > 0) {
        const nextTask = taskQueue.shift();
        runTask(nextTask);
      }
    };
  }

  function runTask(task) {
    activeTasks++;
    const worker = workers.find(w => w.busy === false);
    if (worker) {
      worker.busy = true;
      const taskId = activeTasks;
      worker.postMessage({ taskId, taskName: task.name });
    } else {
      taskQueue.push(task);
    }
  }

  function addTask(task) {
    if (activeTasks < size) {
      runTask(task);
    } else {
      taskQueue.push(task);
    }
  }

  return { addTask };
}

const pool = createThreadPool(2);

function task1() {
  return new Promise(resolve => setTimeout(() => {
    resolve('result 1');
  }, 1000));
}

function task2() {
  return new Promise(resolve => setTimeout(() => {
    resolve('result 2');
  }, 2000));
}

function task3() {
  return new Promise(resolve => setTimeout(() => {
    resolve('result 3');
  }, 3000));
}

pool.addTask(task1);
pool.addTask(task2);
pool.addTask(task3);

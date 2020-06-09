import { thunk } from "./util";

export function* TaskScheduler(taskList: AsyncGenerator[]) {
  do {
    for (let i = 0; i < taskList.length; i++) {
      const task = taskList[i];

      thunk(task.next().then);
    }
  } while (taskList.length);
}

function aaa() {
  return new Promise((r, j) => {
    setTimeout(() => {
      r();
    }, 30 * 1000);
  });
}
var tt = thunk(a.then);

tt();

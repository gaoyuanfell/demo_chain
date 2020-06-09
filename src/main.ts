// async function* task(agList: AsyncGenerator<unknown>[]) {
//   const taskList: Promise<unknown | undefined>[] = [];
//   do {
//     for (let i = 0; i < agList.length; i++) {
//       let task = agList[i].next().then((x) => {
//         const index = taskList.indexOf(task);
//         if (x.done) {
//         } else {
//           taskList[index] = undefined;
//         }
//         return x;
//       });
//       taskList[i] = task;
//     }
//   } while (agList.length);
// }

function thunk(fn: Function) {
  return function (...args: any[]) {
    return function (callback: Function) {
      fn.call(undefined, ...args, callback);
    };
  };
}

function sleep2(time: number, data: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

async function* AA() {
  yield sleep2(1000, "A:1");
  yield sleep2(2000, "A:2");
  yield sleep2(1000, "A:3");
  yield sleep2(3000, "A:4");
  yield sleep2(1500, "A:5");
  yield sleep2(2000, "A:6");
}

async function* BB() {
  yield sleep2(3000, "B:1");
  yield sleep2(1000, "B:2");
  yield sleep2(2000, "B:3");
  yield sleep2(2000, "B:4");
  yield sleep2(1000, "B:5");
  yield sleep2(3000, "B:6");
}

var a: any = {
  asyncList: [],
  [Symbol.asyncIterator]() {
    const { asyncList } = this;

    return {
      next() {
        return 1;
      },
    };
  },
};

async function* task2(asyncList: AsyncGenerator<unknown>[]) {
  let cacheTask: any[] = [];

  //   setInterval(() => {
  //     asyncList.pop();
  //   }, 1000);

  do {
    for (let i = 0; i < asyncList.length; i++) {
      const task = asyncList[i];

      let p = () => {
        task.next().then((data) => {
          console.info(data);
          p();
        });
      };

      p();

      //   let pThunk = thunk(p)();

      //   pThunk(() => {
      //     cacheTask.push(pThunk);
      //   });
    }

    yield sleep2(16, "1");
  } while (asyncList.length);
}

let t = task2([AA(), BB()]);

async function run(ar: AsyncGenerator) {
  for await (let a of ar) {
  }
}

run(t);

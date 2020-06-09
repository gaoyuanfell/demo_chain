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
  asyncList: [AA(), BB()],
  cacheList: [],
  [Symbol.asyncIterator]() {
    const asyncList: AsyncGenerator[] = this.asyncList;
    const cacheList: (Promise<unknown> | undefined)[] = [];

    for (let i = 0; i < asyncList.length; i++) {
      let task = asyncList[i].next().then(({ value, done }) => {
        if (done) {
          asyncList.splice(i, 1);
          cacheList.splice(i, 1);
        } else {
          cacheList[i] = undefined;
        }
      });
      cacheList.push(task);
    }

    return {
      next() {
        return {};
      },
    };

    function next() {
      for (let i = 0; i < asyncList.length; i++) {
        const task = asyncList[i];
        return {
          next() {
            return task.next();
          },
        };
      }
    }

    return next();
  },
};

async function run() {
  for await (const value of a) {
    console.log(value);
  }
}
run();

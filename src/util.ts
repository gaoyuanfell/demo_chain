export function sleep(time: number, data: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

export function* AA() {
  yield sleep2(1000, "A:1");
  yield sleep2(2000, "A:2");
  yield sleep2(1000, "A:3");
  yield sleep2(3000, "A:4");
  yield sleep2(1500, "A:5");
  yield sleep2(2000, "A:6");
}

export function* BB() {
  yield sleep2(3000, "B:1");
  yield sleep2(1000, "B:2");
  yield sleep2(2000, "B:3");
  yield sleep2(2000, "B:4");
  yield sleep2(1000, "B:5");
  yield sleep2(3000, "B:6");
}

export async function run(a: Generator) {
  for await (const value of a) {
    console.log(value);
  }
}

export function thunk(fn: Function) {
  return function (...args: any[]) {
    return function (callback: Function) {
      fn.call(undefined, ...args, callback);
    };
  };
}

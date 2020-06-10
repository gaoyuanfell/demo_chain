import JSBI from "jsbi";

class JSBF extends Array {
  constructor(length: number) {
    super(length);
  }

  format1111() {
    console.log("1212121");
  }

  static BigFloat(from: number | string | any): JSBF {
    from = String(from);
    let arr = from.split(/\./);

    let result = new JSBF(0);
    console.dir(result);
    console.info(result.format1111);
    for (let index = 0; index < arr.length; index++) {
      result.push(JSBI.BigInt(arr[index]));
    }
    return result;
  }

  static add(x: JSBF, y: JSBF): JSBF {
    let result = new JSBF(0);
    for (let index = 0; index < 2; index++) {
      result.push(JSBI.add(x[index], y[index]));
    }
    console.info(result.format1111);
    return result;
  }
}

let aaa = JSBF.BigFloat("1234.4321");

console.info(aaa);
console.info(aaa[0]);
console.info(aaa[1]);
// let bb = JSBF.BigFloat("5678.8765");

// let add = JSBF.add(aa, bb);

console.info(aaa.format1111());

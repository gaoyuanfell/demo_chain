import JSBI from "jsbi";

class JSBF extends Array {
  constructor(length: number, sign?: boolean) {
    super(length);
    this.sign = sign;
  }
  sign: any;

  toString() {
    return "";
  }

  static BigFloat(from: number | string | any): JSBF {
    from = String(from);
    let arr = from.split(/\./);

    let result = new JSBF(0);
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
    return result;
  }
}

let aa = JSBF.BigFloat("1234.4321");
let bb = JSBF.BigFloat("5678.8765");

let add = JSBF.add(aa, bb);

console.info(add);

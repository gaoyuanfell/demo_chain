import { toBigIntBE, toBigIntLE, toBufferBE, toBufferLE } from "bigint-buffer";

let bf = toBufferBE(BigInt("100000000000.000000002"), 8);
console.info(bf);

let b = BigInt(`0x${bf.toString("hex")}`);

console.info(b);

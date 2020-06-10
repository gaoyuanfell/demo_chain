import { flatbuffers } from "flatbuffers";
import { All } from "./all_generated";

let builder = new flatbuffers.Builder(1024);

All.startAll(builder);
All.addTFloat(builder, 3.999999999999999999999999999999999999999999);
All.addTLong(builder, builder.createLong(300, 200));
All.addTFloat64(builder, 9.8888888888888888888888888888);
let end = All.endAll(builder);

builder.finish(end);

let buf = builder.asUint8Array();

let bf = new flatbuffers.ByteBuffer(buf);

let m = All.getRootAsAll(bf);

let l = m.tFloat64();
console.info(l);

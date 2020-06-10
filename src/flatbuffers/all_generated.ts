// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @enum {number}
 */
export enum Color{
  Red= 0,
  Green= 1,
  Blue= 2
};

/**
 * @enum {number}
 */
export enum TNumber{
  NONE= 0,
  Max= 1,
  Min= 2
};

/**
 * @constructor
 */
export class Max {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Max
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Max {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Max= obj
 * @returns Max
 */
static getRootAsMax(bb:flatbuffers.ByteBuffer, obj?:Max):Max {
  return (obj || new Max()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Max= obj
 * @returns Max
 */
static getSizePrefixedRootAsMax(bb:flatbuffers.ByteBuffer, obj?:Max):Max {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Max()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns flatbuffers.Long
 */
tNumber():flatbuffers.Long {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : this.bb!.createLong(0, 0);
};

/**
 * @param flatbuffers.Builder builder
 */
static startMax(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Long tNumber
 */
static addTNumber(builder:flatbuffers.Builder, tNumber:flatbuffers.Long) {
  builder.addFieldInt64(0, tNumber, builder.createLong(0, 0));
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endMax(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

static createMax(builder:flatbuffers.Builder, tNumber:flatbuffers.Long):flatbuffers.Offset {
  Max.startMax(builder);
  Max.addTNumber(builder, tNumber);
  return Max.endMax(builder);
}
}
/**
 * @constructor
 */
export class Min {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Min
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Min {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Min= obj
 * @returns Min
 */
static getRootAsMin(bb:flatbuffers.ByteBuffer, obj?:Min):Min {
  return (obj || new Min()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Min= obj
 * @returns Min
 */
static getSizePrefixedRootAsMin(bb:flatbuffers.ByteBuffer, obj?:Min):Min {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Min()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns flatbuffers.Long
 */
tNumber():flatbuffers.Long {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : this.bb!.createLong(0, 0);
};

/**
 * @param flatbuffers.Builder builder
 */
static startMin(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Long tNumber
 */
static addTNumber(builder:flatbuffers.Builder, tNumber:flatbuffers.Long) {
  builder.addFieldInt64(0, tNumber, builder.createLong(0, 0));
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endMin(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

static createMin(builder:flatbuffers.Builder, tNumber:flatbuffers.Long):flatbuffers.Offset {
  Min.startMin(builder);
  Min.addTNumber(builder, tNumber);
  return Min.endMin(builder);
}
}
/**
 * @constructor
 */
export class All {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns All
 */
__init(i:number, bb:flatbuffers.ByteBuffer):All {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param All= obj
 * @returns All
 */
static getRootAsAll(bb:flatbuffers.ByteBuffer, obj?:All):All {
  return (obj || new All()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param All= obj
 * @returns All
 */
static getSizePrefixedRootAsAll(bb:flatbuffers.ByteBuffer, obj?:All):All {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new All()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns boolean
 */
tBool():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @returns number
 */
tByte():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
tUbyte():number {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
tShort():number {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
tUshort():number {
  var offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
tInt():number {
  var offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
tFloat():number {
  var offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @returns flatbuffers.Long
 */
tLong():flatbuffers.Long {
  var offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : this.bb!.createLong(0, 0);
};

/**
 * @returns flatbuffers.Long
 */
tUlong():flatbuffers.Long {
  var offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readUint64(this.bb_pos + offset) : this.bb!.createLong(0, 0);
};

/**
 * @returns number
 */
tDouble():number {
  var offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
};

/**
 * @returns number
 */
tInt8():number {
  var offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
tInt16():number {
  var offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
tUint16():number {
  var offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
tInt32():number {
  var offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
tUint32():number {
  var offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @returns flatbuffers.Long
 */
tInt64():flatbuffers.Long {
  var offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : this.bb!.createLong(0, 0);
};

/**
 * @returns flatbuffers.Long
 */
tUint64():flatbuffers.Long {
  var offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? this.bb!.readUint64(this.bb_pos + offset) : this.bb!.createLong(0, 0);
};

/**
 * @returns number
 */
tFloat32():number {
  var offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @returns number
 */
tFloat64():number {
  var offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
tString():string|null
tString(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
tString(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 42);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param Max= obj
 * @returns Max|null
 */
tMax(obj?:Max):Max|null {
  var offset = this.bb!.__offset(this.bb_pos, 44);
  return offset ? (obj || new Max()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
};

/**
 * @param Min= obj
 * @returns Min|null
 */
tMin(obj?:Min):Min|null {
  var offset = this.bb!.__offset(this.bb_pos, 46);
  return offset ? (obj || new Min()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
};

/**
 * @returns TNumber
 */
tNumberType():TNumber {
  var offset = this.bb!.__offset(this.bb_pos, 48);
  return offset ? /**  */ (this.bb!.readUint8(this.bb_pos + offset)) : TNumber.NONE;
};

/**
 * @param flatbuffers.Table obj
 * @returns ?flatbuffers.Table
 */
tNumber<T extends flatbuffers.Table>(obj:T):T|null {
  var offset = this.bb!.__offset(this.bb_pos, 50);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @returns Color
 */
tColor():Color {
  var offset = this.bb!.__offset(this.bb_pos, 52);
  return offset ? /**  */ (this.bb!.readInt8(this.bb_pos + offset)) : Color.Red;
};

/**
 * @param flatbuffers.Builder builder
 */
static startAll(builder:flatbuffers.Builder) {
  builder.startObject(25);
};

/**
 * @param flatbuffers.Builder builder
 * @param boolean tBool
 */
static addTBool(builder:flatbuffers.Builder, tBool:boolean) {
  builder.addFieldInt8(0, +tBool, +false);
};

/**
 * @param flatbuffers.Builder builder
 * @param number tByte
 */
static addTByte(builder:flatbuffers.Builder, tByte:number) {
  builder.addFieldInt8(1, tByte, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number tUbyte
 */
static addTUbyte(builder:flatbuffers.Builder, tUbyte:number) {
  builder.addFieldInt8(2, tUbyte, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number tShort
 */
static addTShort(builder:flatbuffers.Builder, tShort:number) {
  builder.addFieldInt16(3, tShort, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number tUshort
 */
static addTUshort(builder:flatbuffers.Builder, tUshort:number) {
  builder.addFieldInt16(4, tUshort, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number tInt
 */
static addTInt(builder:flatbuffers.Builder, tInt:number) {
  builder.addFieldInt32(5, tInt, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number tFloat
 */
static addTFloat(builder:flatbuffers.Builder, tFloat:number) {
  builder.addFieldFloat32(6, tFloat, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Long tLong
 */
static addTLong(builder:flatbuffers.Builder, tLong:flatbuffers.Long) {
  builder.addFieldInt64(7, tLong, builder.createLong(0, 0));
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Long tUlong
 */
static addTUlong(builder:flatbuffers.Builder, tUlong:flatbuffers.Long) {
  builder.addFieldInt64(8, tUlong, builder.createLong(0, 0));
};

/**
 * @param flatbuffers.Builder builder
 * @param number tDouble
 */
static addTDouble(builder:flatbuffers.Builder, tDouble:number) {
  builder.addFieldFloat64(9, tDouble, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number tInt8
 */
static addTInt8(builder:flatbuffers.Builder, tInt8:number) {
  builder.addFieldInt8(10, tInt8, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number tInt16
 */
static addTInt16(builder:flatbuffers.Builder, tInt16:number) {
  builder.addFieldInt16(11, tInt16, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number tUint16
 */
static addTUint16(builder:flatbuffers.Builder, tUint16:number) {
  builder.addFieldInt16(12, tUint16, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number tInt32
 */
static addTInt32(builder:flatbuffers.Builder, tInt32:number) {
  builder.addFieldInt32(13, tInt32, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number tUint32
 */
static addTUint32(builder:flatbuffers.Builder, tUint32:number) {
  builder.addFieldInt32(14, tUint32, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Long tInt64
 */
static addTInt64(builder:flatbuffers.Builder, tInt64:flatbuffers.Long) {
  builder.addFieldInt64(15, tInt64, builder.createLong(0, 0));
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Long tUint64
 */
static addTUint64(builder:flatbuffers.Builder, tUint64:flatbuffers.Long) {
  builder.addFieldInt64(16, tUint64, builder.createLong(0, 0));
};

/**
 * @param flatbuffers.Builder builder
 * @param number tFloat32
 */
static addTFloat32(builder:flatbuffers.Builder, tFloat32:number) {
  builder.addFieldFloat32(17, tFloat32, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number tFloat64
 */
static addTFloat64(builder:flatbuffers.Builder, tFloat64:number) {
  builder.addFieldFloat64(18, tFloat64, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset tStringOffset
 */
static addTString(builder:flatbuffers.Builder, tStringOffset:flatbuffers.Offset) {
  builder.addFieldOffset(19, tStringOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset tMaxOffset
 */
static addTMax(builder:flatbuffers.Builder, tMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(20, tMaxOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset tMinOffset
 */
static addTMin(builder:flatbuffers.Builder, tMinOffset:flatbuffers.Offset) {
  builder.addFieldOffset(21, tMinOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param TNumber tNumberType
 */
static addTNumberType(builder:flatbuffers.Builder, tNumberType:TNumber) {
  builder.addFieldInt8(22, tNumberType, TNumber.NONE);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset tNumberOffset
 */
static addTNumber(builder:flatbuffers.Builder, tNumberOffset:flatbuffers.Offset) {
  builder.addFieldOffset(23, tNumberOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Color tColor
 */
static addTColor(builder:flatbuffers.Builder, tColor:Color) {
  builder.addFieldInt8(24, tColor, Color.Red);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endAll(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset offset
 */
static finishAllBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset offset
 */
static finishSizePrefixedAllBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
};

static createAll(builder:flatbuffers.Builder, tBool:boolean, tByte:number, tUbyte:number, tShort:number, tUshort:number, tInt:number, tFloat:number, tLong:flatbuffers.Long, tUlong:flatbuffers.Long, tDouble:number, tInt8:number, tInt16:number, tUint16:number, tInt32:number, tUint32:number, tInt64:flatbuffers.Long, tUint64:flatbuffers.Long, tFloat32:number, tFloat64:number, tStringOffset:flatbuffers.Offset, tMaxOffset:flatbuffers.Offset, tMinOffset:flatbuffers.Offset, tNumberType:TNumber, tNumberOffset:flatbuffers.Offset, tColor:Color):flatbuffers.Offset {
  All.startAll(builder);
  All.addTBool(builder, tBool);
  All.addTByte(builder, tByte);
  All.addTUbyte(builder, tUbyte);
  All.addTShort(builder, tShort);
  All.addTUshort(builder, tUshort);
  All.addTInt(builder, tInt);
  All.addTFloat(builder, tFloat);
  All.addTLong(builder, tLong);
  All.addTUlong(builder, tUlong);
  All.addTDouble(builder, tDouble);
  All.addTInt8(builder, tInt8);
  All.addTInt16(builder, tInt16);
  All.addTUint16(builder, tUint16);
  All.addTInt32(builder, tInt32);
  All.addTUint32(builder, tUint32);
  All.addTInt64(builder, tInt64);
  All.addTUint64(builder, tUint64);
  All.addTFloat32(builder, tFloat32);
  All.addTFloat64(builder, tFloat64);
  All.addTString(builder, tStringOffset);
  All.addTMax(builder, tMaxOffset);
  All.addTMin(builder, tMinOffset);
  All.addTNumberType(builder, tNumberType);
  All.addTNumber(builder, tNumberOffset);
  All.addTColor(builder, tColor);
  return All.endAll(builder);
}
}
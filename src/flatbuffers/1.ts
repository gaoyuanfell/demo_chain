import { flatbuffers } from "flatbuffers";
import { Monster, Color, Equipment, Weapon, Vec3 } from "./Monster_generated";

let builder = new flatbuffers.Builder(1024);

var weaponOne = builder.createString("Sword");
var weaponTwo = builder.createString("Axe");

Weapon.startWeapon(builder);
Weapon.addName(builder, weaponOne);
Weapon.addDamage(builder, 1);

let modelWeaponSword = Weapon.endWeapon(builder);

Weapon.startWeapon(builder);
Weapon.addName(builder, weaponTwo);
Weapon.addDamage(builder, 1);

let modelWeaponAxe = Weapon.endWeapon(builder);

let name = builder.createString("Orc");
var treasure = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var inv = Monster.createInventoryVector(builder, treasure);
var weapons = Monster.createWeaponsVector(builder, [modelWeaponSword, modelWeaponAxe]);

Monster.startPathVector(builder, 0);
Vec3.createVec3(builder, 4.0, 5.0, 6.0);
Vec3.createVec3(builder, 1.0, 2.0, 3.0);
var path = builder.endVector();

Monster.startMonster(builder);
Monster.addPos(builder, Vec3.createVec3(builder, 1.0, 2.0, 3.0));
Monster.addHp(builder, 300);
Monster.addColor(builder, Color.Red);
Monster.addName(builder, name);
Monster.addInventory(builder, inv);
Monster.addWeapons(builder, weapons);
Monster.addEquippedType(builder, Equipment.Weapon);
Monster.addEquipped(builder, modelWeaponAxe);
Monster.addPath(builder, path);
var orc = Monster.endMonster(builder);

builder.finish(orc);

let buf = builder.asUint8Array();

let bf = new flatbuffers.ByteBuffer(buf);

let m = Monster.getRootAsMonster(bf);

console.info(m.path(0)?.x());
console.info(m.path(0)?.y());
console.info(m.path(0)?.z());
console.info(m.name());

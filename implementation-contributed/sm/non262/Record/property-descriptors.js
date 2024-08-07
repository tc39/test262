// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Record-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Record
description: |
  pending
esid: pending
---*/
var rec = Record({ x: 1, y: 2, a: 3 });

var desc = Object.getOwnPropertyDescriptor(rec, "x");
assert.sameValue(desc.value, 1);
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, true);
assert.sameValue(desc.configurable, false);

assert.sameValue(Object.getOwnPropertyDescriptor(rec, "z"), undefined);

var recO = Object(rec);

assertThrowsInstanceOf(
	() => Object.defineProperty(rec, "x", { value: 1 }),
	TypeError,
	"#{ \"a\": 3, \"x\": 1, \"y\": 2 } is not a non-null object"
);

assertThrowsInstanceOf(
	() => Object.defineProperty(recO, "b", {}),
	TypeError,
	"can't define property \"b\": Record is not extensible"
);

assertThrowsInstanceOf(
	() => Object.defineProperty(recO, Symbol(), {}),
	TypeError,
	"can't define property \"b\": Record is not extensible"
);

assertThrowsInstanceOf(
	() => Object.defineProperty(recO, "x", { value: 2 }),
	TypeError,
	'"x" is read-only'
);

Object.defineProperty(recO, "x", { value: 1 });

assertThrowsInstanceOf(
	() => Object.defineProperty(recO, "x", { value: 2, writable: true }),
	TypeError,
	'Invalid record property descriptor'
);

assertThrowsInstanceOf(
	() => Object.defineProperty(recO, "x", { value: 2, enumerable: false }),
	TypeError,
	'Invalid record property descriptor'
);

assertThrowsInstanceOf(
	() => Object.defineProperty(recO, "x", { value: 2, configurable: true }),
	TypeError,
	'Invalid record property descriptor'
);

assert.sameValue(Object.prototype.propertyIsEnumerable.call(rec, "x"), true);
assert.sameValue(Object.prototype.propertyIsEnumerable.call(rec, "x"), true);
assert.sameValue(Object.prototype.propertyIsEnumerable.call(rec, "w"), false);
assert.sameValue(Object.prototype.propertyIsEnumerable.call(rec, "w"), false);
assert.sameValue(Object.prototype.propertyIsEnumerable.call(recO, "x"), true);
assert.sameValue(Object.prototype.propertyIsEnumerable.call(recO, "x"), true);
assert.sameValue(Object.prototype.propertyIsEnumerable.call(recO, "w"), false);
assert.sameValue(Object.prototype.propertyIsEnumerable.call(recO, "w"), false);

assert.sameValue(Object.prototype.hasOwnProperty.call(rec, "x"), true);
assert.sameValue(Object.prototype.hasOwnProperty.call(rec, "x"), true);
assert.sameValue(Object.prototype.hasOwnProperty.call(rec, "w"), false);
assert.sameValue(Object.prototype.hasOwnProperty.call(rec, "w"), false);
assert.sameValue(Object.prototype.hasOwnProperty.call(recO, "x"), true);
assert.sameValue(Object.prototype.hasOwnProperty.call(recO, "x"), true);
assert.sameValue(Object.prototype.hasOwnProperty.call(recO, "w"), false);
assert.sameValue(Object.prototype.hasOwnProperty.call(recO, "w"), false);

assert.sameValue("x" in recO, true);
assert.sameValue("w" in recO, false);

assert.sameValue(delete rec.x, false);
assert.sameValue(delete rec.x, false);
assert.sameValue(delete rec.w, true);
assert.sameValue(delete rec.w, true);
assert.sameValue(delete recO.x, false);
assert.sameValue(delete recO.x, false);
assert.sameValue(delete recO.w, true);
assert.sameValue(delete recO.w, true);


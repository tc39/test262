// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/
var tup = Tuple(1, 2, 3);
var tupO = Object(tup);

var desc = Object.getOwnPropertyDescriptor(tupO, "0");
assert.sameValue(desc.value, 1);
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, true);
assert.sameValue(desc.configurable, false);

assert.sameValue(Object.getOwnPropertyDescriptor(tupO, "3"), undefined);
assert.sameValue(Object.getOwnPropertyDescriptor(tupO, "w"), undefined);
assert.sameValue(Object.getOwnPropertyDescriptor(tupO, "length"), undefined);

assertThrowsInstanceOf(
  () => Object.defineProperty(tup, "0", { value: 1 }),
  TypeError,
  "#[1, 2, 3] is not a non-null object"
);

assertThrowsInstanceOf(
  () => Object.defineProperty(tupO, "b", {}),
  TypeError,
  'can\'t define property "b": tuple is not extensible'
);

assertThrowsInstanceOf(
  () => Object.defineProperty(tupO, "3", {}),
  TypeError,
  'can\'t define property "3": tuple is not extensible'
);

assertThrowsInstanceOf(
  () => Object.defineProperty(tupO, Symbol(), {}),
  TypeError,
  'can\'t define property "Symbol()": tuple is not extensible'
);

assertThrowsInstanceOf(
  () => Object.defineProperty(tupO, "0", { value: 2 }),
  TypeError,
  '"0" is read-only'
);

Object.defineProperty(tupO, "0", { value: 1 });

assertThrowsInstanceOf(
  () => Object.defineProperty(tupO, "0", { value: 1, writable: true }),
  TypeError,
  "Invalid tuple property descriptor"
);

assertThrowsInstanceOf(
  () => Object.defineProperty(tupO, "0", { value: 1, enumerable: false }),
  TypeError,
  "Invalid tuple property descriptor"
);

assertThrowsInstanceOf(
  () => Object.defineProperty(tupO, "0", { value: 1, configurable: true }),
  TypeError,
  "Invalid tuple property descriptor"
);

assert.sameValue(Object.prototype.propertyIsEnumerable.call(tupO, "0"), true);
assert.sameValue(Object.prototype.propertyIsEnumerable.call(tupO, "0"), true);
assert.sameValue(Object.prototype.propertyIsEnumerable.call(tupO, "w"), false);
assert.sameValue(Object.prototype.propertyIsEnumerable.call(tupO, "w"), false);
assert.sameValue(Object.prototype.propertyIsEnumerable.call(tupO, "3"), false);
assert.sameValue(Object.prototype.propertyIsEnumerable.call(tupO, "3"), false);

assert.sameValue(Object.prototype.hasOwnProperty.call(tupO, "0"), true);
assert.sameValue(Object.prototype.hasOwnProperty.call(tupO, "0"), true);
assert.sameValue(Object.prototype.hasOwnProperty.call(tupO, "w"), false);
assert.sameValue(Object.prototype.hasOwnProperty.call(tupO, "w"), false);
assert.sameValue(Object.prototype.hasOwnProperty.call(tupO, "3"), false);
assert.sameValue(Object.prototype.hasOwnProperty.call(tupO, "3"), false);

assert.sameValue("0" in tupO, true);
assert.sameValue("w" in tupO, false);
assert.sameValue("3" in tupO, false);

assert.sameValue(delete tupO[0], false);
assert.sameValue(delete tupO[0], false);
assert.sameValue(delete tupO.w, true);
assert.sameValue(delete tupO.w, true);
assert.sameValue(delete tupO[3], true);
assert.sameValue(delete tupO[3], true);


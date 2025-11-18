// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  verifyBuiltinConstructor verifies built-in constructor function objects.
includes: [builtin.js, propertyHelper.js]
features: [Proxy, Reflect, Reflect.construct]
---*/

assert.sameValue(typeof verifyBuiltinConstructor, "function");

assert.throws(Test262Error, () => verifyBuiltinConstructor(), "no argument");
assert.throws(Test262Error, () => verifyBuiltinConstructor(undefined), "undefined");
assert.throws(Test262Error, () => verifyBuiltinConstructor(null), "null");
assert.throws(Test262Error, () => verifyBuiltinConstructor(123), "number");
assert.throws(Test262Error, () => verifyBuiltinConstructor(true), "boolean - true");
assert.throws(Test262Error, () => verifyBuiltinConstructor(false), "boolean - false");
assert.throws(Test262Error, () => verifyBuiltinConstructor("string"), "string");

assert.throws(Test262Error, () => verifyBuiltinConstructor({}), "Object instance");
assert.throws(Test262Error, () => verifyBuiltinConstructor([]), "Array instance");

verifyBuiltinConstructor(Array, "Array", 1);
assert.throws(
  Test262Error,
  () => verifyBuiltinConstructor(Array.prototype.join, "join", 1),
  "Array.prototype.join"
);
assert.throws(
  Test262Error,
  () => verifyBuiltinConstructor(Array.prototype[Symbol.iterator], "values", 0),
  "Array.prototype[Symbol.iterator]"
);

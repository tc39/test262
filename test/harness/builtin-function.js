// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  verifyBuiltinFunction verifies built-in function objects.
includes: [builtin.js, propertyHelper.js]
features: [Proxy, Reflect, Reflect.construct]
---*/

assert.sameValue(typeof verifyBuiltinFunction, "function");

assert.throws(Test262Error, () => verifyBuiltinFunction(), "no argument");
assert.throws(Test262Error, () => verifyBuiltinFunction(undefined), "undefined");
assert.throws(Test262Error, () => verifyBuiltinFunction(null), "null");
assert.throws(Test262Error, () => verifyBuiltinFunction(123), "number");
assert.throws(Test262Error, () => verifyBuiltinFunction(true), "boolean - true");
assert.throws(Test262Error, () => verifyBuiltinFunction(false), "boolean - false");
assert.throws(Test262Error, () => verifyBuiltinFunction("string"), "string");

assert.throws(Test262Error, () => verifyBuiltinFunction({}), "Object instance");
assert.throws(Test262Error, () => verifyBuiltinFunction([]), "Array instance");

assert.throws(
  Test262Error,
  () => verifyBuiltinFunction(Array, "Array", 1),
  "Array constructor"
);
verifyBuiltinFunction(Array.prototype.join, "join", 1);
verifyBuiltinFunction(Array.prototype[Symbol.iterator], "values", 0);

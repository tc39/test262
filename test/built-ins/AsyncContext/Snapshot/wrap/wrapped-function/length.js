// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  Returned function's `length` property.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  5. Perform ? CopyNameAndLength(wrapped, fn, "wrapped").

  CopyNameAndLength ( F, Target[, prefix[, argCount ] ] )

  1. If argCount is not present, set argCount to 0.
  2. Let L be 0.
  3. Let targetHasLength be ? HasOwnProperty(Target, "length").
  4. If targetHasLength is true, then
    a. Let targetLen be ? Get(Target, "length").
    b. If targetLen is a Number, then
      i. If targetLen is +∞𝔽, then
        1. Set L to +∞.
      ii. Else if targetLen is -∞𝔽, then
        1. Set L to 0.
      iii. Else,
        1. Let targetLenAsInt be ! ToIntegerOrInfinity(targetLen).
        2. Assert: targetLenAsInt is finite.
        3. Set L to max(targetLenAsInt - argCount, 0).
  5. Perform SetFunctionLength(F, L).

  ToIntegerOrInfinity ( argument )

  1. Let number be ? ToNumber(argument).
  2. If number is one of NaN, +0𝔽, or -0𝔽, return 0.
  3. If number is +∞𝔽, return +∞.
  4. If number is -∞𝔽, return -∞.
  5. Return truncate(ℝ(number)).

  SetFunctionLength ( F, length )

  2. Perform ! DefinePropertyOrThrow(F, "length", PropertyDescriptor { [[Value]]: 𝔽(length), [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }).

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

function callback(_a, _b) { }

function assertLength(expected) {
  const wrapped = AsyncContext.Snapshot.wrap(callback);
  verifyProperty(wrapped, 'length', {
    value: expected,
    writable: false,
    enumerable: false,
    configurable: true
  });
}

function setAndAssertLength(lengthToSet, expected) {
  Object.defineProperty(callback, 'length', {
    value: lengthToSet,
    writable: true,
    enumerable: true,
    configurable: true
  });
  assertLength(expected);
}

assertLength(callback.length);

setAndAssertLength(0, 0);

setAndAssertLength(42, 42);

setAndAssertLength(-42, 0);

setAndAssertLength(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);

setAndAssertLength(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

setAndAssertLength(Number.MAX_SAFE_INTEGER * 120, Number.MAX_SAFE_INTEGER * 120);

setAndAssertLength(-0, 0);

setAndAssertLength(-0.2, 0);

setAndAssertLength(Number.NEGATIVE_INFINITY, 0);

setAndAssertLength(Number.NaN, 0);

setAndAssertLength(7.2, 7);

setAndAssertLength(7.9, 7);

setAndAssertLength(undefined, 0);

setAndAssertLength("42", 0);

setAndAssertLength(Symbol(), 0);

setAndAssertLength(42n, 0);

setAndAssertLength(new Number(42), 0);

setAndAssertLength({
  valueOf() {
    return 42;
  }
}, 0);

delete callback.length;
assertLength(0);

// Inherited length is ignored
Object.defineProperty(
  Object.getPrototypeOf(callback),
  "length",
  { value: 2 }
);
assertLength(0);
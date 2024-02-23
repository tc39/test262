// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  Returned function's `length` property.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  4. Let length be ? LengthOfArrayLike(fn).
  ...
  9. Return CreateBuiltinFunction(closure, length, name, « », realm, prototype, "wrapped").

  LengthOfArrayLike ( obj )

  1. Return ℝ(? ToLength(? Get(obj, "length"))).

  CreateBuiltinFunction ( behaviour, length, name, additionalInternalSlotsList [ , realm [ , prototype [ , prefix ] ] ] )

  10. Perform SetFunctionLength(func, length).
  ...
  13. Return func.

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

setAndAssertLength(Number.POSITIVE_INFINITY, Number.MAX_SAFE_INTEGER);

setAndAssertLength(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

setAndAssertLength(Number.MAX_SAFE_INTEGER + 1, Number.MAX_SAFE_INTEGER);

setAndAssertLength(Number.MAX_SAFE_INTEGER * 120, Number.MAX_SAFE_INTEGER);

setAndAssertLength(Number.MAX_SAFE_INTEGER - 1, Number.MAX_SAFE_INTEGER - 1);

setAndAssertLength(-0, 0);

setAndAssertLength(Number.NaN, 0);

setAndAssertLength(7.2, 7);

setAndAssertLength(7.9, 7);

setAndAssertLength(undefined, 0);

setAndAssertLength("42", 42);

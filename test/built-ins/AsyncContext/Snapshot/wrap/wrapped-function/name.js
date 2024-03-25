// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  Returned function's `name` property.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  5. Let name be ? Get(fn, "name").
  6. If name is not a String, set name to the empty String.
  ...
  9. Return CreateBuiltinFunction(closure, length, name, « », realm, prototype, "wrapped").

  CreateBuiltinFunction ( behaviour, length, name, additionalInternalSlotsList [ , realm [ , prototype [ , prefix ] ] ] )

  11. If prefix is not present, then
    ...
  12. Else,
    a. Perform SetFunctionName(func, name, prefix).
  13. Return func.

  SetFunctionName ( F, name [ , prefix ] )

  5. If prefix is present, then
    a. Set name to the string-concatenation of prefix, the code unit 0x0020 (SPACE), and name.
    ...
  6. Perform ! DefinePropertyOrThrow(F, "name", PropertyDescriptor { [[Value]]: name, [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }).

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

function callback() { }

function assertName(expected) {
  const wrapped = AsyncContext.Snapshot.wrap(callback);
  verifyProperty(wrapped, 'name', {
    value: expected,
    writable: false,
    enumerable: false,
    configurable: true
  });
}

function setAndAssertName(nameToSet, expected) {
  Object.defineProperty(callback, 'name', {
    value: nameToSet,
    writable: true,
    enumerable: true,
    configurable: true
  });
  assertName(expected);
}

assertName("wrapped callback");

setAndAssertName("foo", "wrapped foo");

setAndAssertName(42, "wrapped ");

setAndAssertName(undefined, "wrapped ");

delete callback.name;
assertName("wrapped ");

setAndAssertName(Symbol(), "wrapped ");

setAndAssertName(new String("foo"), "wrapped ");

setAndAssertName({}, "wrapped ");

setAndAssertName(
  {
    toString() {
      assert(false, "The name's toString function must not be called.");
    }
  },
  "wrapped "
);

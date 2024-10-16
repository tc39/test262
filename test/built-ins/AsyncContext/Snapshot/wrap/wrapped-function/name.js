// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  Returned function's `name` property.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  5. Perform ? CopyNameAndLength(wrapped, fn, "wrapped").

  CopyNameAndLength ( F, Target[, prefix[, argCount ] ] )

  6. Let targetName be ? Get(Target, "name").
  7. If targetName is not a String, set targetName to the empty String.
  8. If prefix is present, then
    a. Perform SetFunctionName(F, targetName, prefix).
  ...

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

Object.defineProperty(
  Object.getPrototypeOf(callback),
  "name",
  { value: "inherited" }
);
assertName("wrapped inherited");

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

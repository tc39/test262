// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-boolean-constructor-boolean-value
description: ToBoolean type coercion tests via Boolean()
info: >
  Boolean ( value )

  1. Let b be ToBoolean(value).
  2. If NewTarget is undefined, return b.

features: [BigInt, Symbol, Symbol.toPrimitive]
includes: [typeCoercion.js]
---*/

testCoercibleToBooleanFalse(function(falsy) {
  assert.sameValue(Boolean(falsy), false);
});

testCoercibleToBooleanTrue(function(truthy) {
  assert.sameValue(Boolean(truthy), true);
});

// `Boolean(value)` (without `new`) never throws.

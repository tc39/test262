// Copyright 2019 Google, LLC.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-OptionalExpression
description: >
  optional chain returning undefined in RHS of for of statement
info: |
  IterationStatement
    for (LeftHandSideExpression of Expression) Statement
features: [optional-chaining]
---*/

assert.throws(TypeError, function() {
  const obj = undefined;
  for (const key of obj?.a) {
    str += key;
  }
});

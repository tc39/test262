// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-OptionalExpression
description: >
  optional chain on recursive optional expression
info: |
  Left-Hand-Side Expressions
    OptionalExpression:
      OptionalExpression OptionalChain
features: [optional-chaining]
---*/

const obj = {
  a: {
    b: 22
  }
};

function fn () {
  return {};
}

// MemberExpression
assert.sameValue(22, (obj?.a)?.b);
// CallExpression
assert.sameValue(undefined, (fn()?.a)?.b);

// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-OptionalExpression
description: >
  optional chain on call expression
info: |
  Left-Hand-Side Expressions
    OptionalExpression:
      CallExpression OptionalChain
features: [optional-chaining]
---*/

function fn () {
  return {a: 33};
};

// CallExpression Arguments
assert.sameValue(33, fn()?.a);
assert.sameValue(undefined, fn()?.b);

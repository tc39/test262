// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-OptionalExpression
description: >
  optional chain on member expression
info: |
  Left-Hand-Side Expressions
    OptionalExpression:
      MemberExpression OptionalChain
features: [optional-chaining]
---*/

// PrimaryExpression
//   IdentifierReference

const arr = [10, 11];
const fn = (arg1, arg2) => {
  return arg1 + arg2;
}
const i = 0;
const obj = {
  a: 'hello',
  b: {val: 13},
  c(arg1) {
    return arg1 * 2;
  },
  arr: [11, 12]
};

// OptionalChain: ?.[Expression]
assert.sameValue(11, arr?.[i + 1]);

// OptionalChain: ?.IdentifierName
assert.sameValue('hello', obj?.a);

// OptionalChain: ?.Arguments
assert.sameValue(30, fn?.(10, 20));

// OptionalChain: OptionalChain [Expression]
assert.sameValue(12, obj?.arr[i + 1]);
assert.throws(TypeError, function() {
  obj?.d[i + 1];
});

// OptionalChain: OptionalChain .IdentifierName
assert.sameValue(13, obj?.b.val);
assert.throws(TypeError, function() {
  obj?.d.e;
});

// OptionalChain: OptionalChain Arguments
assert.sameValue(20, obj?.c(10));
assert.throws(TypeError, function() {
  obj?.d();
});

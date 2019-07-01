/*---
esid: pending
info: |
  optional chain on call expression
description: >
  Left-Hand-Side Expressions
    OptionalExpression:
      CallExpression OptionalChain
features: [optional-chaining]
---*/

const fn = () => {
  return {a: 33};
};

assert.sameValue(33, fn()?.a);
assert.sameValue(undefined, fn()?.b?.c);

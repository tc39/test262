/*---
esid: pending
info: |
  optional chain on recursive optional expression
description: >
  Left-Hand-Side Expressions
    OptionalExpression:
      CallExpression OptionalChain
features: [optional-chaining]
---*/

const obj = {
  a: {
    b: {
      c: 22
    }
  }
};

assert.sameValue(22, obj?.a?.b?.c);
assert.sameValue(undefined, obj?.a?.d?.[33]);

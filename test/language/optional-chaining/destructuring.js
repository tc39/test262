/*---
esid: pending
info: |
  destructuring is not supported for properties of optional chain
description: >
  Static Semantics: IsDestructuring
    LeftHandSideExpression:
      CallExpression
      OptionalExpression
   1. Return false.
features: [optional-chaining]
negative:
  type: SyntaxError
  phase: parse
---*/

$DONOTEVALUATE();

const obj = {foo: [1, 2]};
const [a, b] = obj.foo;

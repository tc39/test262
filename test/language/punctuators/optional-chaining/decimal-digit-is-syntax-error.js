/*---
esid: pending
features: [optional-chaining]
info: |
  Optional-chaining operator followed by a numeric character is always a syntax error.
description: Disallow numbers after `?.` operator
negative:
  phase: parse
  type: SyntaxError
---*/

let a = null;
a ? .5;
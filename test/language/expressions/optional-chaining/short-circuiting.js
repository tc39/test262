/*---
esid: pending
info: |
  If the expression on the LHS of ?. evaluates to null/undefined, the RHS is
  not evaluated
description: >
  demonstrate syntax-based short-circuiting.
features: [optional-chaining]
---*/

const a = undefined;
let x = 1;
a?.[++x] // short-circuiting.
a?.b.c(++x).d; // long short-circuiting.

assert.sameValue(1, x);

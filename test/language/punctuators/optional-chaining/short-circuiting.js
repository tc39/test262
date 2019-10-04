/*---
esid: pending
features: [optional-chaining]
info: |
  If the expression on the LHS of `?.` evaluates to null/undefined, the RHS is not evaluated.
description: Optional-chaining short-circuiting
---*/

let x = 0;

let a = null;
a ?.[++x];

assert(x === 0, 'RHS should not be evaluated if `?.` on LHS gives `undefined` value');

let y = 0;
a = { [1]: { b: {} } }

a ?.[++x] ?.b.callMethod ?.(++y);
assert(x === 1, 'Evaluation should continue if `?.` property access succeeds');
assert(y === 0, 'RHS should not be evaluated in long chain if prior property access failed');


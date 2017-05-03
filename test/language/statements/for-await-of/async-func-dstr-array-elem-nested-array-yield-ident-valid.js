// This file was procedurally generated from the following sources:
// - src/dstr-assignment-async-iteration/array-elem-nested-array-yield-ident-valid.case
// - src/dstr-assignment-async-iteration/async-function/for-await-of-async-func.template
/*---
description: When a `yield` token appears within the DestructuringAssignmentTarget of a nested destructuring assignment outside of strict mode, it behaves as an IdentifierReference. (for-await-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding, async-iteration]
flags: [generated, noStrict, async]
info: |
    IterationStatement :
      for await ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    5. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]
---*/
var yield = 'prop';
var x = {};

var iterCount = 0;
async function fn() {
  for await ([[x[yield]]] of [[[22]]]) {
    assert.sameValue(x.prop, 22);
    iterCount += 1;
  }
}

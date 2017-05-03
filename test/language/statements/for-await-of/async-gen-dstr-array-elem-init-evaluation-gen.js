// This file was procedurally generated from the following sources:
// - src/dstr-assignment-async-iteration/array-elem-init-evaluation-gen.case
// - src/dstr-assignment-async-iteration/async-generator/for-await-of-async-gen.template
/*---
description: The Initializer should only be evaluated if v is undefined. (for-await-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding, async-iteration]
flags: [generated, async]
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
var flag1 = false, flag2 = false;
var _;

var iterCount = 0;
async function * fn() {
  for await ([ _ = flag1 = true, _ = flag2 = true ] of [[14]]) {
    assert.sameValue(flag1, false);
    assert.sameValue(flag2, true);


    iterCount += 1;
  }
}

fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);


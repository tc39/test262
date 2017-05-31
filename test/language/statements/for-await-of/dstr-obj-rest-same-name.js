// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-same-name.case
// - src/dstr-assignment/default/for-await-of.template
/*---
description: Proper setting in the values for rest name equal to a property name. (for-await-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [object-rest, destructuring-binding, async-iteration]
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
var o = {
    x: 42,
    y: 39,
    z: 'cheeseburger'
};

var x, y, z;

var counter = 0;

async function fn() {
  for await ({ x, ...z } of [o]) {
    assert.sameValue(x, 42);
    assert.sameValue(y, undefined);
    assert.sameValue(z.y, 39);
    assert.sameValue(z.z, 'cheeseburger');

    var keys = Object.keys(z);
    assert.sameValue(keys.length, 2);
    assert.sameValue(keys[0], 'y');
    assert.sameValue(keys[1], 'z');
    counter += 1;
  }
}

fn()
  .then(() => assert.sameValue(counter, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);

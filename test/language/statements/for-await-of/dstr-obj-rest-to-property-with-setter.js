// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-to-property-with-setter.case
// - src/dstr-assignment/default/for-await-of.template
/*---
description: When DestructuringAssignmentTarget is an object property setter, its value should be binded as rest object. (for-await-of statement)
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
var settedValue;
var executedGetter = false;
var src = {
    get y() { executedGetter = true; },
    set y(v) {
        settedValue = v;
    }
}
src.y = undefined;

var counter = 0;

async function fn() {
  for await ({...src.y} of [{ x: 1, y: 2}]) {
    assert.sameValue(settedValue.x, 1);
    assert.sameValue(settedValue.y, 2);
    assert(!executedGetter, "The property should not be accessed");

    counter += 1;
  }
}

fn()
  .then(() => assert.sameValue(counter, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);

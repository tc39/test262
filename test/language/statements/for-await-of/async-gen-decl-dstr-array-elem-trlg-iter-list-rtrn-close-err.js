// This file was procedurally generated from the following sources:
// - src/dstr-assignment-for-await/array-elem-trlg-iter-list-rtrn-close-err.case
// - src/dstr-assignment-for-await/async-generator/async-gen-decl.template
/*---
description: IteratorClose is invoked when evaluation of AssignmentElementList returns a "return" completion and the iterator has not been marked as "done" (for-await-of statement in an async generator declaration)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [Symbol.iterator, generators, destructuring-binding, async-iteration]
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

    ArrayAssignmentPattern :
        [ AssignmentElementList , Elisionopt AssignmentRestElementopt ]

    [...]
    2. Let iteratorRecord be Record {[[Iterator]]: iterator, [[Done]]: false}.
    3. Let status be the result of performing
       IteratorDestructuringAssignmentEvaluation of AssignmentElementList using
       iteratorRecord as the argument.
    4. If status is an abrupt completion, then
       a. If iteratorRecord.[[Done]] is false, return ? IteratorClose(iterator, status).
       b. Return Completion(status).

    7.4.6 IteratorClose( iterator, completion )

    [...]
    5. Let innerResult be Call(return, iterator, « »).
    6. If completion.[[type]] is throw, return Completion(completion).
    7. If innerResult.[[type]] is throw, return Completion(innerResult).

---*/
let returnCount = 0;
let unreachable = 0;
let iterator = {
  return() {
    returnCount += 1;

    throw new Test262Error();
  }
};
let iterable = {
  [Symbol.iterator]() {
    return iterator;
  }
};


let iterCount = 0;
async function * fn() {
  for await ([ {}[yield] , ] of [iterable]) {
    unreachable += 1;
    iterCount += 1;
  }
}

let iter = fn();

iter.return().then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
  assert.sameValue(returnCount, 1);
  assert.sameValue(unreachable, 0, 'Unreachable statement was not executed');
  assert.sameValue(constructor, Test262Error);
}).then($DONE, $DONE);

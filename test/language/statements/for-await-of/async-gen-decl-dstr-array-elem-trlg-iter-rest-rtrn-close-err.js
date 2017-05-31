// This file was procedurally generated from the following sources:
// - src/dstr-assignment-for-await/array-elem-trlg-iter-rest-rtrn-close-err.case
// - src/dstr-assignment-for-await/async-generator/async-gen-decl.template
/*---
description: IteratorClose is called when AssignmentRestEvaluation produces a "return" completion due to reference evaluation (for-await-of statement in an async generator declaration)
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
    6. If AssignmentRestElement is present, then
       a. Let status be the result of performing
          IteratorDestructuringAssignmentEvaluation of AssignmentRestElement
          with iteratorRecord as the argument.
    7. If iteratorRecord.[[Done]] is false, return ? IteratorClose(iterator, status).
    8. Return Completion(status).

    7.4.6 IteratorClose ( iterator, completion )

    [...]
    5. Let innerResult be Call(return, iterator, « »).
    6. If completion.[[type]] is throw, return Completion(completion).
    7. If innerResult.[[type]] is throw, return Completion(innerResult).

---*/
let nextCount = 0;
let returnCount = 0;
let unreachable = 0;
let x;
let iterator = {
  next() {
    nextCount += 1;
    // Set an upper-bound to limit unnecessary iteration in non-conformant
    // implementations
    return { done: nextCount > 10 };
  },
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
  for await ([ x , ...{}[yield] ] of [iterable]) {
    unreachable += 1;
    iterCount += 1;
  }
}

let iter = fn();

iter.next().then(() => {
  iter.return().then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
    assert.sameValue(nextCount, 1);
    assert.sameValue(returnCount, 1);
    assert.sameValue(constructor, Test262Error);
  }).then($DONE, $DONE);
}).then($DONE, $DONE);

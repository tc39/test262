// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elision.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: Elision advances iterator (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [generators, destructuring-binding, catch-initializer]
flags: [generated]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    ArrayBindingPattern : [ Elision ]

    1. Return the result of performing
       IteratorDestructuringAssignmentEvaluation of Elision with iteratorRecord
       as the argument.

    12.14.5.3 Runtime Semantics: IteratorDestructuringAssignmentEvaluation

    Elision : ,

    1. If iteratorRecord.[[done]] is false, then
       a. Let next be IteratorStep(iteratorRecord.[[iterator]]).
       b. If next is an abrupt completion, set iteratorRecord.[[done]] to true.
       c. ReturnIfAbrupt(next).
       d. If next is false, set iteratorRecord.[[done]] to true.
    2. Return NormalCompletion(empty).

---*/
var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
};

var ranCatch = false;

try {
  throw ;
} catch () {
  assert.sameValue(first, 1);
  assert.sameValue(second, 0);
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');

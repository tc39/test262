// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-id-iter-val.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: SingleNameBinding when value iteration was completed previously (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding, catch-initializer]
flags: [generated]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    4. If iteratorRecord.[[done]] is false, then
       a. Let next be IteratorStep(iteratorRecord.[[iterator]]).
       b. If next is an abrupt completion, set iteratorRecord.[[done]] to true.
       c. ReturnIfAbrupt(next).
       d. If next is false, set iteratorRecord.[[done]] to true.
       e. Else,
          [...]
          i. Let v be IteratorValue(next).
          ii. If v is an abrupt completion, set
              iteratorRecord.[[done]] to true.
          iii. ReturnIfAbrupt(v).
    5. If iteratorRecord.[[done]] is true, let v be undefined.
    [...]
    8. Return InitializeReferencedBinding(lhs, v).
---*/

var ranCatch = false;

try {
  throw undefined;
} catch ([x, y, z] = [1, 2, 3]) {
  assert.sameValue(x, 1);
  assert.sameValue(y, 2);
  assert.sameValue(z, 3);
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');

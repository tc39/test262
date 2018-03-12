// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-ary-elision-iter.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: BindingElement with array binding pattern and initializer is not used (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [generators, destructuring-binding, catch-initializer]
flags: [generated]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    BindingElement : BindingPatternInitializer opt

    1. If iteratorRecord.[[done]] is false, then
       a. Let next be IteratorStep(iteratorRecord.[[iterator]]).
       [...]
       e. Else,
          i. Let v be IteratorValue(next).
          [...]
    4. Return the result of performing BindingInitialization of BindingPattern
       with v and environment as the arguments.

---*/
var callCount = 0;
function* g() {
  callCount += 1;
};

var ranCatch = false;

try {
  throw undefined;
} catch ([[,] = g()] = [[]]) {
  assert.sameValue(callCount, 0);
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');

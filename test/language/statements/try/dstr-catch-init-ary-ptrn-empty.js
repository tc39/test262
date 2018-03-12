// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-empty.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: No iteration occurs for an "empty" array binding pattern (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [generators, destructuring-binding, catch-initializer]
flags: [generated]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    ArrayBindingPattern : [ ]

    1. Return NormalCompletion(empty).

---*/
var iterations = 0;
var iter = function*() {
  iterations += 1;
}();

var ranCatch = false;

try {
  throw undefined;
} catch ([] = iter) {
  assert.sameValue(iterations, 0);
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');

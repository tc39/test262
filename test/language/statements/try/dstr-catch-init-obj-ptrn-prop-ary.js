// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-ary.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: Object binding pattern with "nested" array binding pattern not using initializer (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding, catch-initializer]
flags: [generated]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    [...]
    3. If Initializer is present and v is undefined, then
       [...]
    4. Return the result of performing BindingInitialization for BindingPattern
       passing v and environment as arguments.
---*/

var ranCatch = false;

try {
  throw ;
} catch () {
  assert.sameValue(x, 7);
  assert.sameValue(y, undefined);
  assert.sameValue(z, undefined);

  assert.throws(ReferenceError, function() {
    w;
  });
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');

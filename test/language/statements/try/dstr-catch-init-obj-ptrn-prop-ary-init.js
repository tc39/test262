// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-ary-init.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: Object binding pattern with "nested" array binding pattern using initializer (try catch with initializer statement)
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
       a. Let defaultValue be the result of evaluating Initializer.
       b. Let v be GetValue(defaultValue).
       c. ReturnIfAbrupt(v).
    4. Return the result of performing BindingInitialization for BindingPattern
       passing v and environment as arguments.
---*/

var ranCatch = false;

try {
  throw undefined;
} catch ({ w: [x, y, z] = [4, 5, 6] } = {}) {
  assert.sameValue(x, 4);
  assert.sameValue(y, 5);
  assert.sameValue(z, 6);

  assert.throws(ReferenceError, function() {
    w;
  });
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');

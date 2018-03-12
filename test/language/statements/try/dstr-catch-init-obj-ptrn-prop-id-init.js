// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-id-init.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: Binding as specified via property name, identifier, and initializer (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding, catch-initializer]
flags: [generated]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    8. Return InitializeReferencedBinding(lhs, v).
---*/

var ranCatch = false;

try {
  throw undefined;
} catch ({ x: y = 33 } = { }) {
  assert.sameValue(y, 33);
  assert.throws(ReferenceError, function() {
    x;
  });
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');

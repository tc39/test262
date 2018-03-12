// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-ary-trailing-comma.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: Trailing comma is allowed following BindingPropertyList (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding, catch-initializer]
flags: [generated]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    13.3.3 Destructuring Binding Patterns

    ObjectBindingPattern[Yield] :
        { }
        { BindingPropertyList[?Yield] }
        { BindingPropertyList[?Yield] , }
---*/

var ranCatch = false;

try {
  throw undefined;
} catch ({ x: [y], } = { x: [45] }) {
  assert.sameValue(y,45);
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');

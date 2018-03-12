// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-init-undefined.case
// - src/dstr-binding/error/try-catch-init.template
/*---
description: Value specifed for object binding pattern must be object coercible (undefined) (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding, catch-initializer]
flags: [generated]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    Runtime Semantics: BindingInitialization

    ObjectBindingPattern : { }

    1. Return NormalCompletion(empty).
---*/

assert.throws(TypeError, function() {
    try {
      throw undefined;
    } catch ({} = undefined) {}
  });
  
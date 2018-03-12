// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-eval-err.case
// - src/dstr-binding/error/try-catch-init.template
/*---
description: Evaluation of property name returns an abrupt completion (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding, catch-initializer]
flags: [generated]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    13.3.3.5 Runtime Semantics: BindingInitialization

    BindingProperty : PropertyName : BindingElement

    1. Let P be the result of evaluating PropertyName
    2. ReturnIfAbrupt(P).
---*/
function thrower() {
  throw new Test262Error();
}

assert.throws(Test262Error, function() {
    try {
      throw undefined;
    } catch ({ [thrower()]: x } = {}) {}
  });
  
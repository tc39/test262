// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-id-init-throws.case
// - src/dstr-binding/error/try-catch-init.template
/*---
description: Error thrown when evaluating the initializer (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding, catch-initializer]
flags: [generated]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    BindingElement : BindingPattern Initializeropt

    [...]
    3. If Initializer is present and v is undefined, then
       a. Let defaultValue be the result of evaluating Initializer.
       b. Let v be GetValue(defaultValue).
       c. ReturnIfAbrupt(v).
---*/
function thrower() {
  throw new Test262Error();
}

assert.throws(Test262Error, function() {
    try {
      throw undefined;
    } catch ({ x: y = thrower() } = {}) {}
  });
  
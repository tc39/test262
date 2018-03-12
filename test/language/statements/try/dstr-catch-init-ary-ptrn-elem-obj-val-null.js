// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-obj-val-null.case
// - src/dstr-binding/error/try-catch-init.template
/*---
description: Nested object destructuring with a null value (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding, catch-initializer]
flags: [generated]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    BindingElement : BindingPattern Initializeropt

    1. If iteratorRecord.[[done]] is false, then
       [...]
       e. Else
          i. Let v be IteratorValue(next).
          [...]
    4. Return the result of performing BindingInitialization of BindingPattern
       with v and environment as the arguments.

    13.3.3.5 Runtime Semantics: BindingInitialization

    BindingPattern : ObjectBindingPattern

    1. Let valid be RequireObjectCoercible(value).
    2. ReturnIfAbrupt(valid).
---*/

assert.throws(TypeError, function() {
    try {
      throw undefined;
    } catch ([{ x }] = [null]) {}
  });
  
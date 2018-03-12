// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-init-iter-get-err.case
// - src/dstr-binding/error/try-catch-init.template
/*---
description: Abrupt completion returned by GetIterator (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [Symbol.iterator, destructuring-binding, catch-initializer]
flags: [generated]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    13.3.3.5 Runtime Semantics: BindingInitialization

    BindingPattern : ArrayBindingPattern

    1. Let iterator be GetIterator(value).
    2. ReturnIfAbrupt(iterator).

---*/
var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};

assert.throws(Test262Error, function() {
    try {
      throw undefined;
    } catch ([x] = iter) {}
  });
  
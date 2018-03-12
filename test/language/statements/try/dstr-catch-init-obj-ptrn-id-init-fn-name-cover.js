// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-init-fn-name-cover.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: SingleNameBinding assigns `name` to "anonymous" functions "through" cover grammar (try catch with initializer statement)
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
    6. If Initializer is present and v is undefined, then
       [...]
       d. If IsAnonymousFunctionDefinition(Initializer) is true, then
          i. Let hasNameProperty be HasOwnProperty(v, "name").
          ii. ReturnIfAbrupt(hasNameProperty).
          iii. If hasNameProperty is false, perform SetFunctionName(v,
               bindingId).
---*/

var ranCatch = false;

try {
  throw undefined;
} catch ({ cover = (function () {}), xCover = (0, function() {})  } = {}) {
  assert.sameValue(cover.name, 'cover');
  assert.notSameValue(xCover.name, 'xCover');
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');

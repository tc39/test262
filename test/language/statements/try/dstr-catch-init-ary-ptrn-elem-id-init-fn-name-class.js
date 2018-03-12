// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-id-init-fn-name-class.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: SingleNameBinding assigns `name` to "anonymous" classes (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding, catch-initializer]
flags: [generated]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    6. If Initializer is present and v is undefined, then
       a. Let defaultValue be the result of evaluating Initializer.
       b. Let v be GetValue(defaultValue).
       c. ReturnIfAbrupt(v).
       d. If IsAnonymousFunctionDefinition(Initializer) is true, then
          [...]
    7. If environment is undefined, return PutValue(lhs, v).
    8. Return InitializeReferencedBinding(lhs, v).
---*/

var ranCatch = false;

try {
  throw undefined;
} catch ([cls = class {}, xCls = class X {}, xCls2 = class { static name() {} }] = []) {
  assert.sameValue(cls.name, 'cls');
  assert.notSameValue(xCls.name, 'xCls');
  assert.notSameValue(xCls2.name, 'xCls2');
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');

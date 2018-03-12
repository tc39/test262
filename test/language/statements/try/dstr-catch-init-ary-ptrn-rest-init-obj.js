// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-rest-init-obj.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: Reset element (nested object pattern) does not support initializer (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding, catch-initializer]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    13.3.3 Destructuring Binding Patterns
    ArrayBindingPattern[Yield] :
        [ Elisionopt BindingRestElement[?Yield]opt ]
        [ BindingElementList[?Yield] ]
        [ BindingElementList[?Yield] , Elisionopt BindingRestElement[?Yield]opt ]
---*/
throw "Test262: This statement should not be evaluated.";

var ranCatch = false;

try {
  throw undefined;
} catch ([...{ x } = []] = []) {
  
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');

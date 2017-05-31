// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-obj.case
// - src/dstr-binding/default/async-gen-func-expr.template
/*---
description: Object binding pattern with "nested" object binding pattern not using initializer (async generator function expression)
esid: sec-asyncgenerator-definitions-evaluation
features: [async-iteration]
flags: [generated, async]
info: |
    AsyncGeneratorExpression : async [no LineTerminator here] function * ( FormalParameters ) {
        AsyncGeneratorBody }

        [...]
        3. Let closure be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters,
           AsyncGeneratorBody, scope, strict).
        [...]


    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    [...]
    3. If Initializer is present and v is undefined, then
       [...]
    4. Return the result of performing BindingInitialization for BindingPattern
       passing v and environment as arguments.
---*/


var callCount = 0;
var f;
f = async function*({ w: { x, y, z } = { x: 4, y: 5, z: 6 } }) {
  assert.sameValue(x, undefined);
  assert.sameValue(y, undefined);
  assert.sameValue(z, 7);

  assert.throws(ReferenceError, function() {
    w;
  });
  callCount = callCount + 1;
};

f({ w: { x: undefined, z: 7 } }).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}, $DONE).then($DONE, $DONE);

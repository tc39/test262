// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-rest-nested-obj.case
// - src/dstr-binding/default/async-gen-func-expr-dflt.template
/*---
description: When DestructuringAssignmentTarget is an object literal, it should be parsed parsed as a DestructuringAssignmentPattern and evaluated as a destructuring assignment. (async generator function expression (default parameter))
esid: sec-asyncgenerator-definitions-evaluation
features: [object-rest, async-iteration]
flags: [generated, async]
info: |
    AsyncGeneratorExpression : async [no LineTerminator here] function * ( FormalParameters ) {
        AsyncGeneratorBody }

        [...]
        3. Let closure be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters,
           AsyncGeneratorBody, scope, strict).
        [...]

---*/
var obj = {a: 3, b: 4};


var callCount = 0;
var f;
f = async function*({a, b, ...{c, e}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {
  assert.sameValue(a, 1);
  assert.sameValue(b, 2);
  assert.sameValue(c, 3);
  assert.sameValue(e, 5);

  callCount = callCount + 1;
};

f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}, $DONE).then($DONE, $DONE);

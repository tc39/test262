// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-rest-obj-prop-id.case
// - src/dstr-binding/default/async-gen-meth.template
/*---
description: Rest element containing an object binding pattern (async generator method)
esid: sec-asyncgenerator-definitions-propertydefinitionevaluation
features: [async-iteration]
flags: [generated, async]
info: |
    AsyncGeneratorMethod :
        async [no LineTerminator here] * PropertyName ( UniqueFormalParameters )
            { AsyncGeneratorBody }

    1. Let propKey be the result of evaluating PropertyName.
    2. ReturnIfAbrupt(propKey).
    3. If the function code for this AsyncGeneratorMethod is strict mode code, let strict be true.
       Otherwise let strict be false.
    4. Let scope be the running execution context's LexicalEnvironment.
    5. Let closure be ! AsyncGeneratorFunctionCreate(Method, UniqueFormalParameters,
       AsyncGeneratorBody, scope, strict).
    [...]


    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    BindingRestElement : ... BindingPattern

    1. Let A be ArrayCreate(0).
    [...]
    3. Repeat
       [...]
       b. If iteratorRecord.[[done]] is true, then
          i. Return the result of performing BindingInitialization of
             BindingPattern with A and environment as the arguments.
       [...]
---*/


var callCount = 0;
var obj = {
  async *method([...{ 0: v, 1: w, 2: x, 3: y, length: z }]) {
    assert.sameValue(v, 7);
    assert.sameValue(w, 8);
    assert.sameValue(x, 9);
    assert.sameValue(y, undefined);
    assert.sameValue(z, 3);

    assert.throws(ReferenceError, function() {
      length;
    });
    callCount = callCount + 1;
  }
};

obj.method([7, 8, 9]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}, $DONE).then($DONE, $DONE);

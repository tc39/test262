// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-id-init-fn-name-gen.case
// - src/dstr-binding/default/async-gen-func-decl.template
/*---
description: SingleNameBinding assigns name to "anonymous" generator functions (async generator function declaration)
esid: sec-asyncgenerator-definitions-instantiatefunctionobject
features: [async-iteration]
flags: [generated, async]
info: |
    AsyncGeneratorDeclaration : async [no LineTerminator here] function * BindingIdentifier
        ( FormalParameters ) { AsyncGeneratorBody }

        [...]
        3. Let F be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters, AsyncGeneratorBody,
            scope, strict).
        [...]


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


var callCount = 0;
async function* f([gen = function* () {}, xGen = function* x() {}]) {
  assert.sameValue(gen.name, 'gen');
  assert.notSameValue(xGen.name, 'xGen');
  callCount = callCount + 1;
};
f([]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}, $DONE).then($DONE, $DONE);

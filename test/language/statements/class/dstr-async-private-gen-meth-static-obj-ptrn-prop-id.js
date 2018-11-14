// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-id.case
// - src/dstr-binding/default/cls-decl-async-private-gen-meth-static.template
/*---
description: Binding as specified via property name and identifier (private static class expression async generator method)
esid: sec-runtime-semantics-bindingclassdeclarationevaluation
features: [class, class-static-methods-private, async-iteration]
flags: [generated, async]
info: |
    ClassDeclaration : class BindingIdentifier ClassTail

    1. Let className be StringValue of BindingIdentifier.
    2. Let value be the result of ClassDefinitionEvaluation of ClassTail with
       argument className.
    [...]

    14.5.14 Runtime Semantics: ClassDefinitionEvaluation

    21. For each ClassElement m in order from methods
        a. If IsStatic of m is false, then
        b. Else,
           Let status be the result of performing PropertyDefinitionEvaluation for
           m with arguments F and false.
    [...]

    Runtime Semantics: PropertyDefinitionEvaluation

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


    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    8. Return InitializeReferencedBinding(lhs, v).
---*/


var callCount = 0;
class C {
  static async * #method({ x: y }) {
    assert.sameValue(y, 23);
    assert.throws(ReferenceError, function() {
      x;
    });
    callCount = callCount + 1;
  }

  static get method() {
    return this.#method;
  }
};

C.method({ x: 23 }).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);

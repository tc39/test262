// This file was procedurally generated from the following sources:
// - src/async-functions/await-as-binding-identifier.case
// - src/async-functions/syntax/async-class-expr-static-method.template
/*---
description: await is a reserved keyword within generator function bodies and may not be used as a binding identifier. (Static async method as a ClassExpression element)
esid: prod-AsyncMethod
features: [async-functions]
flags: [generated]
negative:
  phase: early
  type: SyntaxError
info: |
    ClassElement :
      static MethodDefinition

    MethodDefinition :
      AsyncMethod

    Async Function Definitions

    AsyncMethod :
      async [no LineTerminator here] PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }


    BindingIdentifier : Identifier

    It is a Syntax Error if this production has a [Await] parameter and
    StringValue of Identifier is "await".

---*/
throw "Test262: This statement should not be evaluated.";


var C = class { static async method() {
    var await;
}};

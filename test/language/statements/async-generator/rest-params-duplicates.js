// This file was procedurally generated from the following sources:
// - src/function-forms/rest-params-duplicates.case
// - src/function-forms/syntax/async-gen-func-decl.template
/*---
description: It is a Syntax Error if the rest parameter has the same name as a preceding parameter. (async generator function declaration)
esid: sec-asyncgenerator-definitions-instantiatefunctionobject
features: [rest-parameters, async-iteration]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    AsyncGeneratorDeclaration : async [no LineTerminator here] function * BindingIdentifier
        ( FormalParameters ) { AsyncGeneratorBody }

        [...]
        3. Let F be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters, AsyncGeneratorBody,
            scope, strict).
        [...]


    Static Semantics: Early Errors

    FormalParameters :
      FunctionRestParameter
      FormalParameterList ,opt
      FormalParameterList , FunctionRestParameter

    - It is a Syntax Error if the BoundNames of FormalParameters contains any
      duplicate elements and either IsSimpleParameterList of FormalParameters is
      false or IsStrict(FormalParameters) is true.

---*/
$DONOTEVALUATE();


async function* f(x, ...x) {
  
}

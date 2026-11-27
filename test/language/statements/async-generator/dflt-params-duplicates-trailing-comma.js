// This file was procedurally generated from the following sources:
// - src/function-forms/dflt-params-duplicates-trailing-comma.case
// - src/function-forms/syntax/async-gen-func-decl.template
/*---
description: It is a Syntax Error if a non-simple FormalParameters with a trailing comma contains duplicate elements. (async generator function declaration)
esid: sec-asyncgenerator-definitions-instantiatefunctionobject
features: [default-parameters, async-iteration]
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


async function* f(x = 0, x,) {
  
}

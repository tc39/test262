// This file was procedurally generated from the following sources:
// - src/function-forms/params-duplicates-rest.case
// - src/function-forms/syntax/async-gen-named-func-expr.template
/*---
description: It is a Syntax Error if FormalParameters contains duplicate elements and a rest parameter. (async generator named function expression)
esid: sec-asyncgenerator-definitions-evaluation
features: [rest-parameters, async-iteration]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    AsyncGeneratorExpression : async [no LineTerminator here] function * BindingIdentifier
        ( FormalParameters ) { AsyncGeneratorBody }

        [...]
        7. Let closure be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters,
           AsyncGeneratorBody, funcEnv, strict).
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


0, async function* g(x, x, ...y) {
  
};

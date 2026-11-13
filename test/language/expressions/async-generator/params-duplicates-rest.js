// This file was procedurally generated from the following sources:
// - src/function-forms/params-duplicates-rest.case
// - src/function-forms/syntax/async-gen-func-expr.template
/*---
description: It is a Syntax Error if FormalParameters contains duplicate elements and a rest parameter. (async generator function expression)
esid: sec-asyncgenerator-definitions-evaluation
features: [rest-parameters, async-iteration]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    AsyncGeneratorExpression : async [no LineTerminator here] function * ( FormalParameters ) {
        AsyncGeneratorBody }

        [...]
        3. Let closure be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters,
           AsyncGeneratorBody, scope, strict).
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


0, async function*(x, x, ...y) {
  
};

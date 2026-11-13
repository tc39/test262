// This file was procedurally generated from the following sources:
// - src/function-forms/params-duplicates-rest.case
// - src/function-forms/syntax/async-meth.template
/*---
description: It is a Syntax Error if FormalParameters contains duplicate elements and a rest parameter. (async method)
esid: sec-async-function-definitions
features: [rest-parameters, async-iteration]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    14.6 Async Function Definitions

    AsyncMethod :
     async PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }


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


({
  async *method(x, x, ...y) {
    
  }
});

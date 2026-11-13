// This file was procedurally generated from the following sources:
// - src/function-forms/dflt-params-duplicates-trailing-comma.case
// - src/function-forms/syntax/async-func-expr-nameless.template
/*---
description: It is a Syntax Error if a non-simple FormalParameters with a trailing comma contains duplicate elements. (async function nameless expression)
esid: sec-async-function-definitions
features: [default-parameters, async-functions]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    14.6 Async Function Definitions

    AsyncFunctionExpression :
      async function ( FormalParameters ) { AsyncFunctionBody }


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


(async function(x = 0, x,) {
  
});

// This file was procedurally generated from the following sources:
// - src/function-forms/dflt-params-duplicates-trailing-comma.case
// - src/function-forms/syntax/async-arrow-function.template
/*---
description: It is a Syntax Error if a non-simple FormalParameters with a trailing comma contains duplicate elements. (async arrow function expression)
esid: sec-async-arrow-function-definitions
features: [default-parameters]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    14.7 Async Arrow Function Definitions

    AsyncArrowFunction :
      ...
      CoverCallExpressionAndAsyncArrowHead => AsyncConciseBody

    AsyncConciseBody :
      { AsyncFunctionBody }

    ...

    Supplemental Syntax

    When processing an instance of the production AsyncArrowFunction :
    CoverCallExpressionAndAsyncArrowHead => AsyncConciseBody the interpretation of
    CoverCallExpressionAndAsyncArrowHead is refined using the following grammar:

    AsyncArrowHead :
      async ArrowFormalParameters

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


(async (x = 0, x,) => {
  
});

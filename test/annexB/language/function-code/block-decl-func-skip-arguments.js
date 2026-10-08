// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    A block-level function named 'arguments' gets no new var binding, but the
    assignment performed when its declaration is evaluated still runs
esid: sec-web-compat-functiondeclarationinstantiation
flags: [noStrict]
info: |
    FunctionDeclarationInstantiation ( _func_, _argumentsList_ )

    [...]
    5. Let _paramNames_ be the BoundNames of _formals_.
    [...]
    22. If _argumentsObjectNeeded_ is *true*, then
      [...]
      f. Let _paramBindings_ be the list-concatenation of _paramNames_ and
         « *"arguments"* ».
    [...]
    31. If _strict_ is *true*, then
      [...]
    32. Else,
      a. [normative-optional] If the host is a web browser or otherwise supports
         Block-Level Function Declarations Web Legacy Compatibility Semantics,
         then
        i. For each |FunctionDeclaration| _funcDecl_ that is directly contained in
           the |StatementList| of any |Block|, |CaseClause|, or |DefaultClause| _x_
           such that _code_ Contains _x_ is *true*, do
          1. Let _funcName_ be the StringValue of the |BindingIdentifier| of _funcDecl_.
          2. If replacing the |FunctionDeclaration| _funcDecl_ with a |VariableStatement|
             that has _funcName_ as a |BindingIdentifier| would not produce any Early
             Errors for _func_ and _paramNames_ does not contain _funcName_, then
            [...]
            b. If _instantiatedVariableNames_ does not contain _funcName_ and _funcName_
               is not *"arguments"*, then
              i. Perform ! _variableEnv_.CreateMutableBinding(_funcName_, *false*).
              [...]
            c. When the |FunctionDeclaration| _funcDecl_ is evaluated, perform the
               following steps in place of the |FunctionDeclaration| Evaluation
               algorithm provided in 15.2.6:
              [...]
              iv. Perform ! _funcEnv_.SetMutableBinding(_funcName_, _funcObj_, *false*).

    The eligibility test in step 32.a.i.2 consults _paramNames_, which does not
    include the implicit *"arguments"* added to _paramBindings_ by step 22.f. A
    block-level `function arguments(){}` is therefore eligible for the
    |FunctionDeclaration| Evaluation changes, and only the creation of a *new*
    var binding is skipped for that name -- the binding already exists,
    initially holding the arguments object. The assignment in step 32.a.i.2.c.iv
    still runs, so the arguments object is replaced once the declaration is
    evaluated.
---*/

// Simple parameters
(function() {
  assert.sameValue(arguments.toString(), "[object Arguments]");
  {
    assert.sameValue(arguments(), undefined);
    function arguments() {}
    assert.sameValue(arguments(), undefined);
  }
  assert.sameValue(typeof arguments, "function");
}());

// Single named parameter
(function(x) {
  assert.sameValue(arguments.toString(), "[object Arguments]");
  {
    assert.sameValue(arguments(), undefined);
    function arguments() {}
    assert.sameValue(arguments(), undefined);
  }
  assert.sameValue(typeof arguments, "function");
}());

// Non-simple parameters
(function(..._) {
  assert.sameValue(arguments.toString(), "[object Arguments]");
  {
    assert.sameValue(arguments(), undefined);
    function arguments() {}
    assert.sameValue(arguments(), undefined);
  }
  assert.sameValue(typeof arguments, "function");
}());

// A formal parameter named `arguments` *is* in paramNames, so the block-scoped
// function declaration does not affect outer scope.
(function(arguments) {
  assert.sameValue(typeof arguments, "number");
  {
    function arguments() {}
  }
  assert.sameValue(typeof arguments, "number");
}(1));

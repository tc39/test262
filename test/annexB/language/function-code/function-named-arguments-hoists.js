/*---
description: Functions named 'arguments' have legacy hoisting semantics
esid: sec-web-compat-functiondeclarationinstantiation
flags: [noStrict]
info: |
    FunctionDeclarationInstantiation ( _func_, _argumentsList_ )

    [...]
    1. Let _parameterNames_ be the BoundNames of _formals_.
    [...]

    Changes to FunctionDeclarationInstantiation

    [...]
    1. If replacing the |FunctionDeclaration| _f_ with a |VariableStatement| that has _F_ as a |BindingIdentifier| would not produce any Early Errors for _func_ and _F_ is not an element of _parameterNames_, then
      [...]
---*/

// Simple parameters
(function() {
  assert.sameValue(arguments.toString(), "[object Arguments]");
  {
    function arguments() {}
  }
  assert.sameValue(arguments(), undefined);
}());

// Non-simple parameters
(function(..._) {
  assert.sameValue(arguments.toString(), "[object Arguments]");
  {
    function arguments() {}
  }
  assert.sameValue(arguments(), undefined);
}());

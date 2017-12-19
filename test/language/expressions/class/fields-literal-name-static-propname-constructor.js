// This file was procedurally generated from the following sources:
// - src/class-fields/static-propname-constructor.case
// - src/class-fields/propname-error-static/cls-expr-static-literal-name.template
/*---
description: static class field forbid PropName 'constructor' (early error -- PropName of IdentifierName is forbidden)
esid: sec-class-definitions-static-semantics-early-errors
features: [class, class-fields-public]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Static Semantics: PropName
    LiteralPropertyName : IdentifierName
      Return StringValue of IdentifierName.

    
    // This test file tests the following early error:
    Static Semantics: Early Errors

      ClassElement : staticFieldDefinition;
        It is a Syntax Error if PropName of FieldDefinition is "prototype" or "constructor".

---*/


throw "Test262: This statement should not be evaluated.";

var C = class {
  static constructor;
};

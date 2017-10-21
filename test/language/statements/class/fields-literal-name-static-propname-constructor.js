// This file was procedurally generated from the following sources:
// - src/class-fields/static-propname-constructor.case
// - src/class-fields/propname-error/cls-decl-literal-name.template
/*---
description: Static class field cannot have PropName 'constructor' (literal name)
esid: sec-class-definitions-static-semantics-early-errors
features: [class-fields]
flags: [generated]
negative:
  phase: early
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

class C {
  static constructor;
}

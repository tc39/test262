// This file was procedurally generated from the following sources:
// - src/class-fields/grammar-privatename-error.case
// - src/class-fields/syntax/invalid/cls-decl-fields-invalid-syntax.template
/*---
description: No space allowed between sigial and IdentifierName (class declaration)
esid: prod-ClassElement
features: [class-fields-private, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    
    ClassElement :
      MethodDefinition
      static MethodDefinition
      FieldDefinition ;
      ;

    FieldDefinition :
      ClassElementName Initializer _opt

    ClassElementName :
      PropertyName
      PrivateName

    PrivateName ::
      # IdentifierName

---*/


throw "Test262: This statement should not be evaluated.";

class C {
  # x
}

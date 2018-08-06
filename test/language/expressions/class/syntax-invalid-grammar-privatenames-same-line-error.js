// This file was procedurally generated from the following sources:
// - src/class-fields/grammar-privatenames-same-line-error.case
// - src/class-fields/syntax/invalid/cls-expr-fields-invalid-syntax.template
/*---
description: SyntaxError (class expression)
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

    PrivateName::
      # IdentifierName

---*/


throw "Test262: This statement should not be evaluated.";

var C = class {
  #x #y
};

// This file was procedurally generated from the following sources:
// - src/class-fields/grammar-privatename-no-initializer-with-method.case
// - src/class-fields/syntax/valid/cls-expr-fields-valid-syntax.template
/*---
description: SyntaxError (class expression)
esid: prod-ClassElement
features: [class-fields-private, class]
flags: [generated]
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


var C = class {
  #x
  m() {}
};

// This file was procedurally generated from the following sources:
// - src/class-fields/grammar-fields-multi-line.case
// - src/class-fields/syntax/valid/cls-decl-fields-valid-syntax.template
/*---
description: SyntaxError (class declaration)
esid: prod-ClassElement
features: [class-fields-public, class]
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

---*/


class C {
  x
  y
}

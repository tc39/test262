// This file was procedurally generated from the following sources:
// - src/class-fields/grammar-privatenames-multi-line.case
// - src/class-fields/syntax/valid/cls-decl-fields-valid-syntax.template
/*---
description: SyntaxError (class declaration)
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

    PrivateName ::
      # IdentifierName

---*/


class C {
  #x
  #y
}

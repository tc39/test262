// This file was procedurally generated from the following sources:
// - src/class-fields/grammar-fields.case
// - src/class-fields/syntax/invalid/cls-decl-fields-invalid-syntax.template
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


throw "Test262: This statement should not be evaluated.";

class C {
  x y
}

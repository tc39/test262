// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-get-followed-by-name-on-next-line-without-parameters-error.case
// - src/class-elements/syntax/invalid/cls-decl-elements-invalid-syntax.template
/*---
description: SyntaxError for a getter whose name is on the next line and that has no parameter list (class declaration)
esid: prod-ClassElement
features: [class-fields-public, class]
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

    MethodDefinition :
      get ClassElementName ( ) { FunctionBody }

    FieldDefinition :
      ClassElementName Initializer _opt

    The name after "get" is allowed by the getter production, so no semicolon is
    inserted after "get", and the getter is missing its parameter list.

---*/


$DONOTEVALUATE();

class C {
  get
  x
}

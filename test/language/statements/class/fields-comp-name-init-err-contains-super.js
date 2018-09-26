// This file was procedurally generated from the following sources:
// - src/class-elements/init-err-contains-super.case
// - src/class-elements/initializer-error/cls-decl-fields-comp-name.template
/*---
description: Syntax error if `super()` used in class field (computed ClassElementName)
esid: sec-class-definitions-static-semantics-early-errors
features: [class, class-fields-public, computed-property-names]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Static Semantics: Early Errors

      FieldDefinition:
        PropertyNameInitializeropt

      - It is a Syntax Error if Initializer is present and Initializer Contains SuperCall is true.

---*/


throw "Test262: This statement should not be evaluated.";

var x = "string";
class C {
  [x] = super();
}

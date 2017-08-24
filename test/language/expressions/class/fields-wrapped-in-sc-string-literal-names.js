// This file was procedurally generated from the following sources:
// - src/class-fields/string-literal-names.case
// - src/class-fields/default/cls-expr-wrapped-in-sc.template
/*---
description: String literal names (fields definition wrapped in semicolons)
features: [class-fields]
flags: [generated]
includes: [propertyHelper.js]
info: |
    ClassElement:
      ...
      FieldDefinition ;

    FieldDefinition:
      ClassElementName Initializer_opt

    ClassElementName:
      PropertyName

---*/


var C = class {
  ;;;;
  ;;;;;;'a'; "b"; 'c' = 39;
  "d" = 42;;;;;;;
  ;;;;
}

var c = new C();

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "a"), false);
assert.sameValue(Object.hasOwnProperty.call(C, "a"), false);

verifyProperty(c, "a", {
  value: 42,
  enumerable: true,
  writable: true,
  configurable: true
});

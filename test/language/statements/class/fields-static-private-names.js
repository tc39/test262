// This file was procedurally generated from the following sources:
// - src/class-fields/static-private-names.case
// - src/class-fields/default/cls-decl.template
/*---
description: literal private names (field definitions in a class declaration)
esid: prod-FieldDefinition
features: [class, class-fields-public]
flags: [generated]
info: |
    ClassElement:
      ...
      static FieldDefinition ;

    FieldDefinition:
      ClassElementName Initializer_opt

    ClassElementName:
      PrivateName

    PrivateName:
      # IdentifierName

---*/


class C {
  static #x; static #y
}

// Test the private fields do not appear as properties before set to value
assert.sameValue(Object.hasOwnProperty.call(C.prototype, "#x"), false, "test 1");
assert.sameValue(Object.hasOwnProperty.call(C, "#x"), false, "test 2");
assert.sameValue(Object.hasOwnProperty.call(c, "#x"), false, "test 3");

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "#y"), false, "test 4");
assert.sameValue(Object.hasOwnProperty.call(C, "#y"), false, "test 5");
assert.sameValue(Object.hasOwnProperty.call(c, "#y"), false, "test 6");

// Test if private fields can be sucessfully accessed and set to value
assert.sameValue(C.x(), 42, "test 7");
assert.sameValue(C.y(), 43, "test 8");

// Test the private fields do not appear as properties before after set to value
assert.sameValue(Object.hasOwnProperty.call(C, "#x"), false, "test 9");
assert.sameValue(Object.hasOwnProperty.call(C, "#y"), false, "test 10");

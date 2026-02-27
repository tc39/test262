// This file was procedurally generated from the following sources:
// - src/decorator/field-deco-invalid-return.case
// - src/decorator/fields/error/private/instance/cls-decl.template
/*---
description: Decorator can't return an invalid value (private field decorator evaluation error in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


function dec(value) {
  return 123;
}


function evaluate() {
  class C {
    @dec

    #element;
  }
}

assert.throws(TypeError, evaluate);

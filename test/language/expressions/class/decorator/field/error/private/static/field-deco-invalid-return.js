// This file was procedurally generated from the following sources:
// - src/decorator/field-deco-invalid-return.case
// - src/decorator/fields/error/private/static/cls-expr.template
/*---
description: Decorator can't return an invalid value (private static field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec(value) {
  return 123;
}


function evaluate() {
  var C = class {
    @dec

    static #element;
  }
}

assert.throws(TypeError, evaluate);

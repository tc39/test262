// This file was procedurally generated from the following sources:
// - src/decorator/add-initializer-non-callable.case
// - src/decorator/fields/error/private/static/cls-expr.template
/*---
description: addInitializer throws TypeError if argument is not callable (private static field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec(_, context) {
  context.addInitializer(123);
}


function evaluate() {
  var C = class {
    @dec

    static #element;
  }
}

assert.throws(TypeError, evaluate);

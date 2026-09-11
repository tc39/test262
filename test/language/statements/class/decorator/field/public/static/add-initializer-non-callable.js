// This file was procedurally generated from the following sources:
// - src/decorator/add-initializer-non-callable.case
// - src/decorator/fields/error/public/static/cls-decl.template
/*---
description: addInitializer throws TypeError if argument is not callable (public static field decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
flags: [generated]
---*/


function dec(_, context) {
  context.addInitializer(123);
}


function evaluate() {
  class C {
    @dec

    static element;
  }
}

assert.throws(TypeError, evaluate);


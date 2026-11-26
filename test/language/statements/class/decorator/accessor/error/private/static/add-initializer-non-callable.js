// This file was procedurally generated from the following sources:
// - src/decorator/add-initializer-non-callable.case
// - src/decorator/accessors/error/private/static/cls-decl.template
/*---
description: addInitializer throws TypeError if argument is not callable (private static accessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec(_, context) {
  context.addInitializer(123);
}


function evaluate() {
  class C {
    @dec

    static accessor #element;
  }
}

assert.throws(TypeError, evaluate);


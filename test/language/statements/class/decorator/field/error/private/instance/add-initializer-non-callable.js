// This file was procedurally generated from the following sources:
// - src/decorator/add-initializer-non-callable.case
// - src/decorator/fields/error/private/instance/cls-decl.template
/*---
description: addInitializer throws TypeError if argument is not callable (private field decorator evaluation error in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


function dec(_, context) {
  context.addInitializer(123);
}


function evaluate() {
  class C {
    @dec

    #element;
  }
}

assert.throws(TypeError, evaluate);

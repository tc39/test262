// This file was procedurally generated from the following sources:
// - src/decorator/add-initializer-non-callable.case
// - src/decorator/setters/error/public/instance/cls-decl.template
/*---
description: addInitializer throws TypeError if argument is not callable (public setter decorator evaluation error in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  context.addInitializer(123);
}


function evaluate() {
  class C {
    @dec

    set element(value) {}
  }
}

assert.throws(TypeError, evaluate);


// This file was procedurally generated from the following sources:
// - src/decorator/add-initializer-non-callable.case
// - src/decorator/setters/error/private/instance/cls-decl.template
/*---
description: addInitializer throws TypeError if argument is not callable (private setter decorator evaluation error in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  context.addInitializer(123);
}


function evaluate() {
  class C {
    @dec

    set #element(value) {}
  }
}

assert.throws(TypeError, evaluate);

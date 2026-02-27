// This file was procedurally generated from the following sources:
// - src/decorator/method-deco-returns-invalid.case
// - src/decorator/methods/error/private/instance/cls-decl.template
/*---
description: Decorator can't return an invalid value (private method decorator evaluation error in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  return 123;
}


function evaluate() {
  class C {
    @dec

    #element() {}
  }
}

assert.throws(TypeError, evaluate);

// This file was procedurally generated from the following sources:
// - src/decorator/method-deco-returns-invalid.case
// - src/decorator/methods/error/public/static/cls-decl.template
/*---
description: Decorator can't return an invalid value (public static method decorator evaluation error in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  return 123;
}


function evaluate() {
  class C {
    @dec

    static element() {}
  }
}

assert.throws(TypeError, evaluate);


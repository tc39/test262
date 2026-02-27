// This file was procedurally generated from the following sources:
// - src/decorator/getter-deco-returns-invalid.case
// - src/decorator/getters/error/public/static/cls-decl.template
/*---
description: Decorator can't return an invalid value (public static getter decorator evaluation error in class declaration)
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

    static get element() {}
  }
}

assert.throws(TypeError, evaluate);


// This file was procedurally generated from the following sources:
// - src/decorator/getter-deco-returns-invalid.case
// - src/decorator/getters/error/private/instance/cls-decl.template
/*---
description: Decorator can't return an invalid value (private getter decorator evaluation error in class declaration)
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

    get #element() {}
  }
}

assert.throws(TypeError, evaluate);

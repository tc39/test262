// This file was procedurally generated from the following sources:
// - src/decorator/method-deco-returns-invalid.case
// - src/decorator/methods/error/public/instance/cls-expr.template
/*---
description: Decorator can't return an invalid value (public method decorator evaluation error in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  return 123;
}


function evaluate() {
  var C = class {
    @dec

    element() {}
  }
}

assert.throws(TypeError, evaluate);


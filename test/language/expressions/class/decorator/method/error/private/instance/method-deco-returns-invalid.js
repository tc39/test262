// This file was procedurally generated from the following sources:
// - src/decorator/method-deco-returns-invalid.case
// - src/decorator/methods/error/private/instance/cls-expr.template
/*---
description: Decorator can't return an invalid value (private method decorator evaluation error in class expression)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  return 123;
}


function evaluate() {
  var C = class {
    @dec

    #element() {}
  }
}

assert.throws(TypeError, evaluate);


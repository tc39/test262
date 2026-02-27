// This file was procedurally generated from the following sources:
// - src/decorator/getter-deco-returns-invalid.case
// - src/decorator/getters/error/private/instance/cls-expr.template
/*---
description: Decorator can't return an invalid value (private getter decorator evaluation error in class expression)
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

    get #element() {}
  }
}

assert.throws(TypeError, evaluate);


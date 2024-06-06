// This file was procedurally generated from the following sources:
// - src/decorator/getter-deco-returns-invalid.case
// - src/decorator/getters/error/public/static/cls-expr.template
/*---
description: Decorator can't return an invalid value (public static getter decorator evaluation error in class expression)
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

    static get element() {}
  }
}

assert.throws(TypeError, evaluate);

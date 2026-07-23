// This file was procedurally generated from the following sources:
// - src/decorator/setter-deco-returns-invalid.case
// - src/decorator/setters/error/public/static/cls-expr.template
/*---
description: Decorator can't return an invalid value (public static setter decorator evaluation error in class expression)
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

    static set element(value) {}
  }
}

assert.throws(TypeError, evaluate);

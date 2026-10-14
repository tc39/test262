// This file was procedurally generated from the following sources:
// - src/decorator/setter-deco-returns-invalid.case
// - src/decorator/setters/error/public/instance/cls-expr.template
/*---
description: Decorator can't return an invalid value (public setter decorator evaluation error in class expression)
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

    set element(value) {}
  }
}

assert.throws(TypeError, evaluate);


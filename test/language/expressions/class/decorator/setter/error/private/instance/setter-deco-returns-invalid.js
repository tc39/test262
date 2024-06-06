// This file was procedurally generated from the following sources:
// - src/decorator/setter-deco-returns-invalid.case
// - src/decorator/setters/error/private/instance/cls-expr.template
/*---
description: Decorator can't return an invalid value (private setter decorator evaluation error in class expression)
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

    set #element(value) {}
  }
}

assert.throws(TypeError, evaluate);


// This file was procedurally generated from the following sources:
// - src/decorator/setter-deco-returns-invalid.case
// - src/decorator/setters/error/private/static/cls-decl.template
/*---
description: Decorator can't return an invalid value (private static setter decorator evaluation error in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  return 123;
}


function evaluate() {
  class C {
    @dec

    static set #element(value) {}
  }
}

assert.throws(TypeError, evaluate);


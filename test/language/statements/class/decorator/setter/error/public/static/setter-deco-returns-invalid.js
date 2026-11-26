// This file was procedurally generated from the following sources:
// - src/decorator/setter-deco-returns-invalid.case
// - src/decorator/setters/error/public/static/cls-decl.template
/*---
description: Decorator can't return an invalid value (public static setter decorator evaluation error in class declaration)
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

    static set element(value) {}
  }
}

assert.throws(TypeError, evaluate);


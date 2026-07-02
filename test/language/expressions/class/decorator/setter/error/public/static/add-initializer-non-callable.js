// This file was procedurally generated from the following sources:
// - src/decorator/add-initializer-non-callable.case
// - src/decorator/setters/error/public/static/cls-expr.template
/*---
description: addInitializer throws TypeError if argument is not callable (public static setter decorator evaluation error in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  context.addInitializer(123);
}


function evaluate() {
  var C = class {
    @dec

    static set element(value) {}
  }
}

assert.throws(TypeError, evaluate);

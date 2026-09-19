// This file was procedurally generated from the following sources:
// - src/decorator/add-initializer-non-callable.case
// - src/decorator/getters/error/private/static/cls-expr.template
/*---
description: addInitializer throws TypeError if argument is not callable (private static getter decorator evaluation error in class expression)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  context.addInitializer(123);
}


function evaluate() {
  var C = class {
    @dec

    static get #element() {}
  }
}

assert.throws(TypeError, evaluate);

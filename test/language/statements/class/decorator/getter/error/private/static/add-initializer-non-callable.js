// This file was procedurally generated from the following sources:
// - src/decorator/add-initializer-non-callable.case
// - src/decorator/getters/error/private/static/cls-decl.template
/*---
description: addInitializer throws TypeError if argument is not callable (private static getter decorator evaluation error in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  context.addInitializer(123);
}


function evaluate() {
  class C {
    @dec

    static get #element() {}
  }
}

assert.throws(TypeError, evaluate);


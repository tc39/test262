// This file was procedurally generated from the following sources:
// - src/decorator/add-initializer-non-callable.case
// - src/decorator/methods/error/public/static/cls-decl.template
/*---
description: addInitializer throws TypeError if argument is not callable (public static method decorator evaluation error in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  context.addInitializer(123);
}


function evaluate() {
  class C {
    @dec

    static element() {}
  }
}

assert.throws(TypeError, evaluate);


// This file was procedurally generated from the following sources:
// - src/decorator/add-initializer-non-callable.case
// - src/decorator/class/error/cls-decl.template
/*---
description: addInitializer throws TypeError if argument is not callable (class decorator evaluation error in class declaration)
esid: prod-ClassDeclaration
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  context.addInitializer(123);
}


function evaluate() {
  @dec

  class C {}
}

assert.throws(TypeError, evaluate);

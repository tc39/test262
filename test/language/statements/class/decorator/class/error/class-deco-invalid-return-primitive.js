// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-invalid-return-primitive.case
// - src/decorator/class/error/cls-decl.template
/*---
description: Class decorator cannot return a random non-newable value (class decorator evaluation error in class declaration)
esid: prod-ClassDeclaration
features: [decorators, class]
flags: [generated]
---*/


function dec() {
  return 123;
}


function evaluate() {
  @dec

  class C {}
}

assert.throws(TypeError, evaluate);

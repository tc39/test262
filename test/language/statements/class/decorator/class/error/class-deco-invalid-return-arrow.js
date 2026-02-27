// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-invalid-return-arrow.case
// - src/decorator/class/error/cls-decl.template
/*---
description: Class decorator cannot return non-newable function (arrow) (class decorator evaluation error in class declaration)
esid: prod-ClassDeclaration
features: [decorators, class]
flags: [generated]
---*/


function dec() {
  return () => {}
}


function evaluate() {
  @dec

  class C {}
}

assert.throws(TypeError, evaluate);

// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-invalid-return-arrow.case
// - src/decorator/class/error/cls-expr.template
/*---
description: Class decorator cannot return non-newable function (arrow) (class decorator evaluation error in class expression)
esid: prod-ClassExpression
features: [decorators, class]
flags: [generated]
---*/


function dec() {
  return () => {}
}


function evaluate() {
  var C = @dec
 class {}
}

assert.throws(TypeError, evaluate);

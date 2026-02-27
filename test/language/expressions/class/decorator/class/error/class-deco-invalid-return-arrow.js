// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-invalid-return-arrow.case
// - src/decorator/class/error/cls-expr.template
/*---
description: Class decorator cannot return non-newable function (arrow) (private method decorator evaluation error in class expression)
esid: prod-ClassExpression
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec() {
  return () => {}
}


function evaluate() {
  var C = class {
    @dec

    #element() {}
  }
}

assert.throws(TypeError, evaluate);


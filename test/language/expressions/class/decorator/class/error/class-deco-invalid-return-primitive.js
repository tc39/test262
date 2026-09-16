// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-invalid-return-primitive.case
// - src/decorator/class/error/cls-expr.template
/*---
description: Class decorator cannot return a random non-newable value (private method decorator evaluation error in class expression)
esid: prod-ClassExpression
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec() {
  return 123;
}


function evaluate() {
  var C = class {
    @dec

    #element() {}
  }
}

assert.throws(TypeError, evaluate);


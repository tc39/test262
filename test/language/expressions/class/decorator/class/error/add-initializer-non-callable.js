// This file was procedurally generated from the following sources:
// - src/decorator/add-initializer-non-callable.case
// - src/decorator/class/error/cls-expr.template
/*---
description: addInitializer throws TypeError if argument is not callable (class decorator evaluation error in class expression)
esid: prod-ClassExpression
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  context.addInitializer(123);
}


function evaluate() {
  var C = @dec
 class {}
}

assert.throws(TypeError, evaluate);

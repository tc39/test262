// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-returns-function.case
// - src/decorator/class/standard/cls-expr.template
/*---
description: Class decorator can return a standard function (decorator usage in a class expression)
esid: prod-FieldExpression
features: [decorators, class]
flags: [generated]
---*/


function dec(C, context) {
  return function() {
    return 123;
  };
}


var C = @dec
 class {
  
}

assert.sameValue(C(), 123);


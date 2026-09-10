// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-returns-proxy.case
// - src/decorator/class/standard/cls-expr.template
/*---
description: Class decorator can return a Proxy (decorator usage in a class expression)
esid: prod-FieldExpression
features: [decorators, Proxy, class]
flags: [generated]
---*/


var originalClass;
var subClass;

function dec(C, context) {
  originalClass = C;

  return new Proxy(C, {
    construct() {
      return 123;
    }
  });
}


var C = @dec
 class {
  
}

assert(C !== originalClass, 'values are not the same');
assert(C instanceof originalClass, 'value is instance of class');
assert.sameValue(new C(), 123);

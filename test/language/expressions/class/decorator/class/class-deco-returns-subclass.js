// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-returns-subclass.case
// - src/decorator/class/standard/cls-expr.template
/*---
description: Class decorator can return a new class (decorator usage in a class expression)
esid: prod-FieldExpression
features: [decorators, class]
flags: [generated]
---*/


var originalClass;
var subClass;

function dec(C, context) {
  originalClass = C;
  subClass = class D extends C {
    static foo() {
      return 123;
    }
  };

  return subClass;
}


var C = @dec
 class {
  
}

var c = new C();

assert.sameValue(C, subClass);
assert(c instanceof originalClass, 'new class is subclass of old class');
assert.sameValue(C.foo(), 123);

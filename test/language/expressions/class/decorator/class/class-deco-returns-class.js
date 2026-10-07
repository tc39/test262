// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-returns-class.case
// - src/decorator/class/standard/cls-expr.template
/*---
description: Class decorator can return a new class (decorator usage in a class expression)
esid: prod-FieldExpression
features: [decorators, class]
flags: [generated]
---*/


var originalClass;
var newClass;

function dec(C, context) {
  originalClass = C;
  newClass = class D {
    static foo() {
      return 123;
    }
  };

  return newClass;
}


var C = @dec
 class {
  
}

assert.sameValue(C, newClass);
assert(!(C instanceof originalClass), 'new class is not a subclass of old class');
assert.sameValue(C.foo(), 123);


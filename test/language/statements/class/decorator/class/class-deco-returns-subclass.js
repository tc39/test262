// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-returns-subclass.case
// - src/decorator/class/standard/cls-decl.template
/*---
description: Class decorator can return a new class (decorator usage in a class declaration)
esid: prod-ClassDeclaration
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


@dec

class C {
  
}

var c = new C();

assert.sameValue(C, subClass);
assert(c instanceof originalClass, 'new class is subclass of old class');
assert.sameValue(C.foo(), 123);

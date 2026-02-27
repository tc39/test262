// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-returns-proxy.case
// - src/decorator/class/standard/cls-decl.template
/*---
description: Class decorator can return a Proxy (decorator usage in a class declaration)
esid: prod-ClassDeclaration
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


@dec

class C {
  
}

assert(C !== originalClass, 'values are not the same');
assert(C instanceof originalClass, 'value is instance of class');
assert.sameValue(new C(), 123);

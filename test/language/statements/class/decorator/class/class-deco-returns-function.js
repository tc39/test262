// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-returns-function.case
// - src/decorator/class/standard/cls-decl.template
/*---
description: Class decorator can return a standard function (decorator usage in a class declaration)
esid: prod-ClassDeclaration
features: [decorators, class]
flags: [generated]
---*/


function dec(C, context) {
  return function() {
    return 123;
  };
}


@dec

class C {
  
}

assert.sameValue(C(), 123);


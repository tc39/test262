// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-rebinds-identifier.case
// - src/decorator/class/standard/cls-decl.template
/*---
description: Class decorator return value is rebound before static fields are run (decorator usage in a class declaration)
esid: prod-ClassDeclaration
features: [decorators, class]
flags: [generated]
---*/


var originalClass;
var subClass;

function dec(C, context) {
  originalClass = C;
  subClass = class D extends C {}

  return subClass;
}


@dec

class C {
  static foo = assert(C === subClass, 'class identifier was rebound');

}

var c = new C();

assert.sameValue(C, subClass);
assert(c instanceof originalClass, 'new class is subclass of old class');

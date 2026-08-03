// This file was procedurally generated from the following sources:
// - src/decorator/method-deco-returns-undefined.case
// - src/decorator/methods/standard/public/instance/cls-decl.template
/*---
description: Decorator undefined return defaults to previous value (public method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec1(value, context) {
  assert.sameValue(value(), 123);

  return () => 456;
}

function dec2(value, context) {
  assert.sameValue(value(), 456);
}


class C {
  @dec2 @dec1

  element() {
    return 123;
  }

  getElement() {
    return this.element;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement()(), 456);


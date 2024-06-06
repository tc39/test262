// This file was procedurally generated from the following sources:
// - src/decorator/setter-deco-returns-undefined.case
// - src/decorator/setters/standard/public/instance/cls-decl.template
/*---
description: Decorator undefined return defaults to previous value (public setter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


var value;

function dec1(set, context) {
  return function (v) {
    assert.sameValue(v, 456);
    set.call(this, 789);
  };
}

function dec2(value, context) {
  // do nothing
}

class C {
  internalValue = 123;

  @dec2 @dec1

  set element(value) {
    this.internalValue = value;
  }

  getElement() {
    return this.internalValue;
  }

  setElement(value) {
    this.element = value;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement(), 123);
classOrInstance.setElement(456);
assert.sameValue(classOrInstance.getElement(), 789);


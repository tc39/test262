// This file was procedurally generated from the following sources:
// - src/decorator/setter-deco-returns-undefined.case
// - src/decorator/setters/standard/private/instance/cls-expr.template
/*---
description: Decorator undefined return defaults to previous value (private setter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
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

var C = class {
  internalValue = 123;

  @dec2 @dec1

  set #element(value) {
    this.internalValue = value;
  }

  getElement() {
    return this.internalValue;
  }

  setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement(), 123);
classOrInstance.setElement(456);
assert.sameValue(classOrInstance.getElement(), 789);

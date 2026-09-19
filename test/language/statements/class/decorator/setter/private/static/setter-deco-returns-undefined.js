// This file was procedurally generated from the following sources:
// - src/decorator/setter-deco-returns-undefined.case
// - src/decorator/setters/standard/private/static/cls-decl.template
/*---
description: Decorator undefined return defaults to previous value (private static setter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
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
  static internalValue = 123;

  @dec2 @dec1

  static set #element(value) {
    this.internalValue = value;
  }

  static getElement() {
    return this.internalValue;
  }

  static setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), 123);
classOrInstance.setElement(456);
assert.sameValue(classOrInstance.getElement(), 789);

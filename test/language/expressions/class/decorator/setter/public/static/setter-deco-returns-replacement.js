// This file was procedurally generated from the following sources:
// - src/decorator/setter-deco-returns-replacement.case
// - src/decorator/setters/standard/public/static/cls-expr.template
/*---
description: Can replace a decorated setter with a new setter (public static setter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(set, context) {
  return function (v) {
    assert.sameValue(v, 456);
    set.call(this, 789);
  };
}

var C = class {
  static internalValue = 123;

  @dec

  static set element(value) {
    this.internalValue = value;
  }

  static getElement() {
    return this.internalValue;
  }

  static setElement(value) {
    this.element = value;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), 123);
classOrInstance.setElement(456);
assert.sameValue(classOrInstance.getElement(), 789);

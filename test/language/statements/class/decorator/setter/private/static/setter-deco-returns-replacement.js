// This file was procedurally generated from the following sources:
// - src/decorator/setter-deco-returns-replacement.case
// - src/decorator/setters/standard/private/static/cls-decl.template
/*---
description: Can replace a decorated setter with a new setter (private static setter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


function dec(set, context) {
  return function (v) {
    assert.sameValue(v, 456);
    set.call(this, 789);
  };
}

class C {
  static internalValue = 123;

  @dec

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

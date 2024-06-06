// This file was procedurally generated from the following sources:
// - src/decorator/setter-deco-returns-replacement.case
// - src/decorator/setters/standard/public/instance/cls-decl.template
/*---
description: Can replace a decorated setter with a new setter (public setter decorator behavior in class declaration)
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

class C {
  internalValue = 123;

  @dec

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


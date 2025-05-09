// This file was procedurally generated from the following sources:
// - src/decorator/getter-deco-returns-undefined.case
// - src/decorator/getters/standard/public/instance/cls-expr.template
/*---
description: Decorator undefined return defaults to previous value (public getter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec1(value, context) {
  return function() {
    assert.sameValue(value.call(this), 123);

    return 456;
  };
}

function dec2() {}


var C = class {
  internalValue = 123;

  @dec2 @dec1

  get element() {
    return this.internalValue;
  }

  getElement() {
    return this.element;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement(), 456);

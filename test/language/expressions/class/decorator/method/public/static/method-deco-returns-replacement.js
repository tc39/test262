// This file was procedurally generated from the following sources:
// - src/decorator/method-deco-returns-replacement.case
// - src/decorator/methods/standard/public/static/cls-expr.template
/*---
description: Can replace a decorated method with a new method (public static method decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(value, context) {
  assert.sameValue(value(), 123);

  return () => 456;
}


var C = class {
  @dec

  static element() {
    return 123;
  }

  static getElement() {
    return this.element;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement()(), 456);

// This file was procedurally generated from the following sources:
// - src/decorator/method-generator-deco-returns-replacement.case
// - src/decorator/methods/generator/private/instance/cls-expr.template
/*---
description: Can replace a decorated method with a new method (private method decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec(value, context) {
  assert(value() instanceof Iterator, 'value is iterator');

  return () => 456;
}


var C = class {
  @dec

  * #element() {
    return 123;
  }

  getElement() {
    return this.#element;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement()(), 456);

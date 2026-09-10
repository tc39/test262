// This file was procedurally generated from the following sources:
// - src/decorator/method-generator-deco-returns-undefined.case
// - src/decorator/methods/generator/private/instance/cls-expr.template
/*---
description: Decorator undefined return defaults to previous value (private method decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec1(value, context) {
  assert(value() instanceof Iterator, 'value is iterator');

  return () => 456;
}

function dec2(value, context) {
  assert.sameValue(value(), 456);
}


var C = class {
  @dec2 @dec1

  * #element() {
    return 123;
  }

  getElement() {
    return this.#element;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement()(), 456);

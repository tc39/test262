// This file was procedurally generated from the following sources:
// - src/decorator/method-generator-deco-returns-replacement.case
// - src/decorator/methods/generator/public/instance/cls-decl.template
/*---
description: Can replace a decorated method with a new method (public method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(value, context) {
  assert(value() instanceof Iterator, 'value is iterator');

  return () => 456;
}


class C {
  @dec

  * element() {
    return 123;
  }

  getElement() {
    return this.element;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement()(), 456);


// This file was procedurally generated from the following sources:
// - src/decorator/method-async-deco-returns-replacement.case
// - src/decorator/methods/async/private/instance/cls-decl.template
/*---
description: Can replace a decorated method with a new method (private method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec(value, context) {
  assert(value() instanceof Promise);

  return () => 456;
}


class C {
  @dec

  async #element() {
    return 123;
  }

  getElement() {
    return this.#element;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement()(), 456);

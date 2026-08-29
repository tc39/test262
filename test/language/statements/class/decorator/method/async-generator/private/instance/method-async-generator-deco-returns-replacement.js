// This file was procedurally generated from the following sources:
// - src/decorator/method-async-generator-deco-returns-replacement.case
// - src/decorator/methods/async-generator/private/instance/cls-decl.template
/*---
description: Can replace a decorated async generator method with a new method (private async generator method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, async-iteration, class, class-methods-private]
flags: [generated]
---*/


function dec(value, context) {
  var iter = value();
  assert.sameValue(typeof iter.next, 'function');
  assert.sameValue(typeof iter.return, 'function');

  return () => 456;
}


class C {
  @dec

  async * #element() {
    return 123;
  }

  getElement() {
    return this.#element;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement()(), 456);

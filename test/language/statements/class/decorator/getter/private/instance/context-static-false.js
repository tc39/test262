// This file was procedurally generated from the following sources:
// - src/decorator/context-static-false.case
// - src/decorator/getters/standard/private/instance/cls-decl.template
/*---
description: Context `static` is false for all types of instance elements (private getter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.static, false);
}


class C {
  internalValue = 123;

  @dec
  get #element() {
    return this.internalValue;
  }

  getElement() {
    return this.#element;
  }
}

var classOrInstance = new C();



// This file was procedurally generated from the following sources:
// - src/decorator/context-static-false.case
// - src/decorator/methods/standard/private/instance/cls-decl.template
/*---
description: Context `static` is false for all types of instance elements (private method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.static, false);
}


class C {
  @dec
  #element() {
    return 123;
  }

  getElement() {
    return this.#element;
  }
}

var classOrInstance = new C();



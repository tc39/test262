// This file was procedurally generated from the following sources:
// - src/decorator/context-static-true.case
// - src/decorator/methods/standard/private/static/cls-decl.template
/*---
description: Context `static` is false for all types of instance elements (private static method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.static, true);
}


class C {
  @dec
  static #element() {
    return 123;
  }

  static getElement() {
    return this.#element;
  }
}

var classOrInstance = C;



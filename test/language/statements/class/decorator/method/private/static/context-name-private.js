// This file was procedurally generated from the following sources:
// - src/decorator/context-name-private.case
// - src/decorator/methods/standard/private/static/cls-decl.template
/*---
description: Context name is correct for all types of private elements (private static method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.name, "#element");
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



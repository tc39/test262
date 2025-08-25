// This file was procedurally generated from the following sources:
// - src/decorator/context-name-private.case
// - src/decorator/getters/standard/private/static/cls-decl.template
/*---
description: Context name is correct for all types of private elements (private static getter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.name, "#element");
}


class C {
  static internalValue = 123;

  @dec
  static get #element() {
    return this.internalValue;
  }

  static getElement() {
    return this.#element;
  }
}

var classOrInstance = C;



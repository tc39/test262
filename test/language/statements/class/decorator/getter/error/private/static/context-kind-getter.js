// This file was procedurally generated from the following sources:
// - src/decorator/context-kind-getter.case
// - src/decorator/getters/standard/private/static/cls-decl.template
/*---
description: Context kind is the string "method" when decorating a method (private static getter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.kind, "getter");
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



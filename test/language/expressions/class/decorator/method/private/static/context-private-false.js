// This file was procedurally generated from the following sources:
// - src/decorator/context-private-false.case
// - src/decorator/methods/standard/private/static/cls-expr.template
/*---
description: Context `private` is true for all types of private elements (private static method decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.private, true);
}


var C = class {
  @dec
  static #element() {
    return 123;
  }

  static getElement() {
    return this.#element;
  }
}

var classOrInstance = C;



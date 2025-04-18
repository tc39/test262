// This file was procedurally generated from the following sources:
// - src/decorator/context-private-false.case
// - src/decorator/accessors/standard/private/static/cls-decl.template
/*---
description: Context `private` is true for all types of private elements (private static acessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.private, true);
}


class C {
  @dec
  static accessor #element;

  static getElement() {
    return this.#element;
  }

  static setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = C;



// This file was procedurally generated from the following sources:
// - src/decorator/context-kind-field.case
// - src/decorator/fields/standard/private/static/cls-decl.template
/*---
description: Context kind is the string "field" when decorating a field (private static field decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.kind, "field");
}


class C {
  @dec
  static #element;

  static getElement() {
    return this.#element;
  }

  static setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = C;



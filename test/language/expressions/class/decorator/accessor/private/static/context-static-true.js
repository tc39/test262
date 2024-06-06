// This file was procedurally generated from the following sources:
// - src/decorator/context-static-true.case
// - src/decorator/accessors/standard/private/static/cls-expr.template
/*---
description: Context `static` is false for all types of instance elements (private static acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.static, true);
}


var C = class {
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



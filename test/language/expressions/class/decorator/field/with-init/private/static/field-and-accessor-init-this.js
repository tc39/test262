// This file was procedurally generated from the following sources:
// - src/decorator/field-and-accessor-init-this.case
// - src/decorator/fields/with-init/private/static/cls-expr.template
/*---
description: Field initializer `this` value is the instance or the class (private static with initializer field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


var savedThisValues = [];

function dec(value, context) {
  function init (value) {
    savedThisValues.push(this);
  }

  return context.kind === 'field' ? init : { init };
}


var C = class {
  @dec

  static #element = savedThisValues.push(this);
;

  static getElement() {
    return this.#element;
  }

  static setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = C;

savedThisValues.forEach((v) => assert.sameValue(v, classOrInstance));

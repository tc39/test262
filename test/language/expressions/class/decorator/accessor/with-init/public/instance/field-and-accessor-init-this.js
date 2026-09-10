// This file was procedurally generated from the following sources:
// - src/decorator/field-and-accessor-init-this.case
// - src/decorator/accessors/with-init/public/instance/cls-expr.template
/*---
description: Field initializer `this` value is the instance or the class (public accessor with initializer decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
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

  accessor element = savedThisValues.push(this);
;

  getElement() {
    return this.element;
  }

  setElement(value) {
    this.element = value;
  }
}

var classOrInstance = new C();

savedThisValues.forEach((v) => assert.sameValue(v, classOrInstance));

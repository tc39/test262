// This file was procedurally generated from the following sources:
// - src/decorator/field-receives-undefined.case
// - src/decorator/fields/with-init/public/instance/cls-decl.template
/*---
description: Value passed to field decorators is undefined (public field with initializer decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
flags: [generated]
---*/


function dec(value) {
  assert.sameValue(value, undefined);
}


class C {
  @dec
  element = 123
;

  getElement() {
    return this.element;
  }

  setElement(value) {
    this.element = value;
  }
}

var classOrInstance = new C();



// This file was procedurally generated from the following sources:
// - src/decorator/field-with-init-deco-returns-undefined.case
// - src/decorator/fields/with-init/public/instance/cls-expr.template
/*---
description: Decorator initializer is called with initial value during initialization (public field with initializer decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
flags: [generated]
info: |
    InitializeFieldOrAccessor ( receiver, elementRecord )

    ...

---*/


function dec(value) {
  assert.sameValue(value, undefined);
}


var C = class {
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

assert.sameValue(classOrInstance.getElement(), 123);

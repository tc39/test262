// This file was procedurally generated from the following sources:
// - src/decorator/field-with-init-deco-returns-undefined.case
// - src/decorator/fields/with-init/public/instance/cls-decl.template
/*---
description: Decorator initializer is called with initial value during initialization (public field with initializer decorator behavior in class declaration)
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

assert.sameValue(classOrInstance.getElement(), 123);

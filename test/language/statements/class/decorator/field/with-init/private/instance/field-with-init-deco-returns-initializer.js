// This file was procedurally generated from the following sources:
// - src/decorator/field-with-init-deco-returns-initializer.case
// - src/decorator/fields/with-init/private/instance/cls-decl.template
/*---
description: Decorator initializer is called with initial value during initialization (private field with initializer decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
info: |
    InitializeFieldOrAccessor ( receiver, elementRecord )

    ...

---*/


function dec(value) {
  return (init) => {
    assert.sameValue(init, 123);
    return 456;
  }
}


class C {
  @dec

  #element = 123
;

  getElement() {
    return this.#element;
  }

  setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement(), 456);

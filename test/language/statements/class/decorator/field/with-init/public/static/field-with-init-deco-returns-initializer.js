// This file was procedurally generated from the following sources:
// - src/decorator/field-with-init-deco-returns-initializer.case
// - src/decorator/fields/with-init/public/static/cls-decl.template
/*---
description: Decorator initializer is called with initial value during initialization (public static with initializer field decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
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

  static element = 123
;

  static getElement() {
    return this.element;
  }

  static setElement(value) {
    this.element = value;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), 456);

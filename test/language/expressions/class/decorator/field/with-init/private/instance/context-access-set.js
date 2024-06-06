// This file was procedurally generated from the following sources:
// - src/decorator/context-access-set.case
// - src/decorator/fields/with-init/private/instance/cls-expr.template
/*---
description: Context access `get` works on all gettable types of values (private field with initializer decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


var access;

function dec(_, context) {
  access = context.access;
}


var C = class {
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

access.set(classOrInstance, 456);
assert.sameValue(classOrInstance.getElement(), 456);

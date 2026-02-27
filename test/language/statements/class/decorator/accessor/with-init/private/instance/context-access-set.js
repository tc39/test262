// This file was procedurally generated from the following sources:
// - src/decorator/context-access-set.case
// - src/decorator/accessors/with-init/private/instance/cls-decl.template
/*---
description: Context access `get` works on all gettable types of values (private accessor with initializer decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


var access;

function dec(_, context) {
  access = context.access;
}


class C {
  @dec

  accessor #element = 123
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

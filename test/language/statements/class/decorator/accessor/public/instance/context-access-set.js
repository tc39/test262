// This file was procedurally generated from the following sources:
// - src/decorator/context-access-set.case
// - src/decorator/accessors/standard/public/instance/cls-decl.template
/*---
description: Context access `get` works on all gettable types of values (public acessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
flags: [generated]
---*/


var access;

function dec(_, context) {
  access = context.access;
}


class C {
  @dec

  accessor element;

  getElement() {
    return this.element;
  }

  setElement(value) {
    this.element = value;
  }
}

var classOrInstance = new C();

access.set(classOrInstance, 456);
assert.sameValue(classOrInstance.getElement(), 456);

// This file was procedurally generated from the following sources:
// - src/decorator/context-access-get.case
// - src/decorator/accessors/standard/public/static/cls-decl.template
/*---
description: Context access `get` works on all gettable types of values (public static acessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
flags: [generated]
---*/


var access;

function dec(_, context) {
  access = context.access;
}


class C {
  @dec

  static accessor element;

  static getElement() {
    return this.element;
  }

  static setElement(value) {
    this.element = value;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), access.get(classOrInstance));

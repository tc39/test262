// This file was procedurally generated from the following sources:
// - src/decorator/context-access-get.case
// - src/decorator/accessors/standard/private/static/cls-expr.template
/*---
description: Context access `get` works on all gettable types of values (private static acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


var access;

function dec(_, context) {
  access = context.access;
}


var C = class {
  @dec

  static accessor #element;

  static getElement() {
    return this.#element;
  }

  static setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), access.get(classOrInstance));

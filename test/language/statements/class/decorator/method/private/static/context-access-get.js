// This file was procedurally generated from the following sources:
// - src/decorator/context-access-get.case
// - src/decorator/methods/standard/private/static/cls-decl.template
/*---
description: Context access `get` works on all gettable types of values (private static method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


var access;

function dec(_, context) {
  access = context.access;
}


class C {
  @dec

  static #element() {
    return 123;
  }

  static getElement() {
    return this.#element;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), access.get(classOrInstance));

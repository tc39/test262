// This file was procedurally generated from the following sources:
// - src/decorator/context-name-private.case
// - src/decorator/setters/standard/private/static/cls-decl.template
/*---
description: Context name is correct for all types of private elements (private static setter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.name, "#element");
}

class C {
  static internalValue = 123;

  @dec
  static set #element(value) {
    this.internalValue = value;
  }

  static getElement() {
    return this.internalValue;
  }

  static setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = C;



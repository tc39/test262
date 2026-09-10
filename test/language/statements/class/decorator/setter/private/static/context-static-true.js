// This file was procedurally generated from the following sources:
// - src/decorator/context-static-true.case
// - src/decorator/setters/standard/private/static/cls-decl.template
/*---
description: Context `static` is false for all types of instance elements (private static setter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.static, true);
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



// This file was procedurally generated from the following sources:
// - src/decorator/context-private-true.case
// - src/decorator/setters/standard/public/static/cls-decl.template
/*---
description: Context `private` is false for all types of public elements (public static setter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.private, false);
}

class C {
  static internalValue = 123;

  @dec
  static set element(value) {
    this.internalValue = value;
  }

  static getElement() {
    return this.internalValue;
  }

  static setElement(value) {
    this.element = value;
  }
}

var classOrInstance = C;



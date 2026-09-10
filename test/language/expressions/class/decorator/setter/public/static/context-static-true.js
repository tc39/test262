// This file was procedurally generated from the following sources:
// - src/decorator/context-static-true.case
// - src/decorator/setters/standard/public/static/cls-expr.template
/*---
description: Context `static` is false for all types of instance elements (public static setter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.static, true);
}

var C = class {
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



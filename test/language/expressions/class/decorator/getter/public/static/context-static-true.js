// This file was procedurally generated from the following sources:
// - src/decorator/context-static-true.case
// - src/decorator/getters/standard/public/static/cls-expr.template
/*---
description: Context `static` is true for all types of static elements (public static getter decorator behavior in class expression)
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
  static get element() {
    return this.internalValue;
  }

  static getElement() {
    return this.element;
  }
}

var classOrInstance = C;



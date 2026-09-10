// This file was procedurally generated from the following sources:
// - src/decorator/context-name-public.case
// - src/decorator/getters/standard/public/static/cls-expr.template
/*---
description: Context name is correct for all types of public elements (public static getter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.name, "element");
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



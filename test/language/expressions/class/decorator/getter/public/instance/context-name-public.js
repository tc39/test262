// This file was procedurally generated from the following sources:
// - src/decorator/context-name-public.case
// - src/decorator/getters/standard/public/instance/cls-expr.template
/*---
description: Context name is correct for all types of public elements (public getter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.name, "element");
}


var C = class {
  internalValue = 123;

  @dec
  get element() {
    return this.internalValue;
  }

  getElement() {
    return this.element;
  }
}

var classOrInstance = new C();



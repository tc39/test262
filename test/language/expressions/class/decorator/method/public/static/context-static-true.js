// This file was procedurally generated from the following sources:
// - src/decorator/context-static-true.case
// - src/decorator/methods/standard/public/static/cls-expr.template
/*---
description: Context `static` is false for all types of instance elements (public static method decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.static, true);
}


var C = class {
  @dec
  static element() {
    return 123;
  }

  static getElement() {
    return this.element;
  }
}

var classOrInstance = C;



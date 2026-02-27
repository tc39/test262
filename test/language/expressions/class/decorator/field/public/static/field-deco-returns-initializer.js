// This file was procedurally generated from the following sources:
// - src/decorator/field-deco-returns-initializer.case
// - src/decorator/fields/standard/public/static/cls-expr.template
/*---
description: Decorator and initializer order (public static field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
flags: [generated]
---*/


function dec(value) {
  return (init) => {
    assert.sameValue(init, undefined);
    return 123;
  }
}


var C = class {
  @dec

  static element;

  static getElement() {
    return this.element;
  }

  static setElement(value) {
    this.element = value;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), 123);

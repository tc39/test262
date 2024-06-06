// This file was procedurally generated from the following sources:
// - src/decorator/field-deco-returns-initializer.case
// - src/decorator/fields/standard/private/instance/cls-expr.template
/*---
description: Decorator and initializer order (private field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
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

  #element;

  getElement() {
    return this.#element;
  }

  setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement(), 123);

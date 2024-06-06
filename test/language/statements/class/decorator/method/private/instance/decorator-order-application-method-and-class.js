// This file was procedurally generated from the following sources:
// - src/decorator/decorator-order-application-method-and-class.case
// - src/decorator/methods/standard/private/instance/cls-decl.template
/*---
description: Order of decorator application for elements without initializers (private method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


var ord = [];

function pushOrd(applyOrd, extraInitOrd) {
  return (value, context) => {
    ord.push(applyOrd);
    context.addInitializer(() => ord.push(extraInitOrd));
  }
}


class C {
  @pushOrd(1, 3)
  @pushOrd(0, 2)

  #element() {
    return 123;
  }

  getElement() {
    return this.#element;
  }
}

var classOrInstance = new C();

assert.sameValue(ord.length, 4);
ord.forEach(assert.sameValue);

// This file was procedurally generated from the following sources:
// - src/decorator/decorator-order-application-field-and-accessor.case
// - src/decorator/accessors/with-init/private/static/cls-expr.template
/*---
description: Order of decorator application for elements with initializers (private static with initializer acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


var ord = [];

function pushOrd(applyOrd, initOrd, extraInitOrd) {
  return (value, context) => {
    ord.push(applyOrd);
    context.addInitializer(() => ord.push(extraInitOrd));

    if (context.kind === 'field') {
      return () => ord.push(initOrd);
    } else {
      return {
        init() {
          ord.push(initOrd);
        }
      }
    }
  }
}


var C = class {
  @pushOrd(1, 3, 6)
  @pushOrd(0, 4, 5)

  static accessor #element = ord.push(2)
;

  static getElement() {
    return this.#element;
  }

  static setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = C;

assert.sameValue(ord.length, 7);
ord.forEach(assert.sameValue);

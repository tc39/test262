// This file was procedurally generated from the following sources:
// - src/decorator/decorator-order-application-field-and-accessor.case
// - src/decorator/accessors/with-init/public/instance/cls-decl.template
/*---
description: Order of decorator application for elements with initializers (public accessor with initializer decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
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


class C {
  @pushOrd(1, 3, 6)
  @pushOrd(0, 4, 5)

  accessor element = ord.push(2)
;

  getElement() {
    return this.element;
  }

  setElement(value) {
    this.element = value;
  }
}

var classOrInstance = new C();

assert.sameValue(ord.length, 7);
ord.forEach(assert.sameValue);

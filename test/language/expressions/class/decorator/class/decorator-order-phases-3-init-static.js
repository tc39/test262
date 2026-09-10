// This file was procedurally generated from the following sources:
// - src/decorator/decorator-order-phases-3-init-static.case
// - src/decorator/class/standard/cls-expr.template
/*---
description: Class definition static initialization order (decorator usage in a class expression)
esid: prod-FieldExpression
features: [decorators, class]
flags: [generated]
info: |
    In the static initialization phase, the class definition is initialized in the
    following order:

    1. Static method extra-initializers are run, finalizing static method
       definition.
    2. Static fields and blocks are evaluated and assigned in lexical order. For
       each field, extra-initializers are run for that field immediately after
       assignment.
    3. Class extra-initializers are run, finalizing the class definition.

    After this, the class is fully defined.

---*/


var ord = [];

// For dynamic element name evaluation order
function dynamicName(name, order) {
  ord.push(order);
  return name;
}

function pushOrd(initOrd, extraInitOrd) {
  return (value, context) => {
    if (context.kind === 'field') {
      context.addInitializer(() => ord.push(extraInitOrd));

      return () => ord.push(initOrd);
    } else if (context.kind === 'accessor') {
      context.addInitializer(() => ord.push(extraInitOrd));

      return {
        init() {
          ord.push(initOrd);
        }
      }
    } else {
      context.addInitializer(() => ord.push(initOrd));
    }
  }
}

ord.push(0);



var C = @pushOrd(12)

 class {
  static {
    ord.push(3);
  }


  @pushOrd(1)
  static a() {}

  @pushOrd(5, 6)
  static accessor b = ord.push(4);

  e = ord.push(14);


  static {
    ord.push(7);
  }


  accessor e = ord.push(15);

  @pushOrd(2)
  static get c() {}

  @pushOrd(9, 10)
  static d = ord.push(8);


  static {
    ord.push(11);
  }

}

ord.push(13);

new C();

ord.push(16);

assert.sameValue(ord.length, 17);
ord.forEach(assert.sameValue);

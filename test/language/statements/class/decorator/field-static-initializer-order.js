// This file was procedurally generated from the following sources:
// - src/decorator/field-static-initializer-order.case
// - src/decorator/default/cls-decl.template
/*---
description: Decorated field static initializers interleave with static blocks (decorator usage in a class declaration)
esid: prod-FieldDefinition
features: [decorators, class]
flags: [generated]
---*/


var ord = [];

function pushOrd(evalOrd, applyOrd, initOrd, extraOrd) {
  ord.push(evalOrd);

  return (value, context) => {
    ord.push(applyOrd);

    context.addInitializer(() => ord.push(extraOrd));

    return () => {
      ord.push(initOrd);
    }
  }
}


class C {
  static {
    ord.push(4)
  }

  @pushOrd(0, 3, 6, 9)
  @pushOrd(1, 2, 7, 8)
  static foo = ord.push(5);

  static {
    ord.push(10)
  }

}

assert.sameValue(ord.length, 11);
ord.forEach(assert.sameValue);

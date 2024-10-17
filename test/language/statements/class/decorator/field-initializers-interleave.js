// This file was procedurally generated from the following sources:
// - src/decorator/field-initializers-interleave.case
// - src/decorator/default/cls-decl.template
/*---
description: Decorated field initializers are interleaved with undecorated fields (decorator usage in a class declaration)
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
  @pushOrd(0, 5, 9, 12)
  @pushOrd(1, 4, 10, 11)
  foo = ord.push(8);

  bar = ord.push(13);

  @pushOrd(2, 7, 15, 18)
  @pushOrd(3, 6, 16, 17)
  baz = ord.push(14)

}

new C();

assert.sameValue(ord.length, 19);
ord.forEach(assert.sameValue);

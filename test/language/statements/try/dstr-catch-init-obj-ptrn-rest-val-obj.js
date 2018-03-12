// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-rest-val-obj.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: Rest object contains just unextracted data (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [object-rest, destructuring-binding, catch-initializer]
flags: [generated]
includes: [propertyHelper.js]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]
---*/

var ranCatch = false;

try {
  throw undefined;
} catch ({a, b, ...rest} = {x: 1, y: 2, a: 5, b: 3}) {
  assert.sameValue(rest.a, undefined);
  assert.sameValue(rest.b, undefined);

  verifyProperty(rest, "x", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 1
  });

  verifyProperty(rest, "y", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 2
  });
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');

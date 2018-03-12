// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-rest-skip-non-enumerable.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: Rest object doesn't contain non-enumerable properties (try catch with initializer statement)
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
var o = {a: 3, b: 4};
Object.defineProperty(o, "x", { value: 4, enumerable: false });

var ranCatch = false;

try {
  throw undefined;
} catch ({...rest} = o) {
  assert.sameValue(rest.x, undefined);

  verifyProperty(rest, "a", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 3
  });

  verifyProperty(rest, "b", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 4
  });
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');

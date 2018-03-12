// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-rest-getter.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: Getter is called when obj is being deconstructed to a rest Object (try catch with initializer statement)
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
var count = 0;

var ranCatch = false;

try {
  throw undefined;
} catch ({...x} = { get v() { count++; return 2; } }) {
  assert.sameValue(count, 1);

  verifyProperty(x, "v", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 2
  });
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');

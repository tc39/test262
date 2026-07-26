/*---
description: Decorator order of operations and access to context name
esid: pending
features: [class, decorators]
includes: [compareArray.js]
info: |
  This was taken from the babel test suite https://github.com/babel/babel/blob/87ec4fc3d2cf44c30ef007f7da47d7177e07ffec/packages/babel-plugin-proposal-decorators/test/fixtures/2023-11-accessors/context-name/input.js#L1

---*/

const logs = [];
const dec = (value, context) => { logs.push(context.name) };
const f = () => { logs.push("computing f"); return { [Symbol.toPrimitive]: () => (logs.push("calling toPrimitive"), "f()") }; };
class Foo {
  @dec static accessor a;
  @dec static accessor #a;

  @dec static accessor "b"
  @dec static accessor ["c"];

  @dec static accessor 0;
  @dec static accessor [1];

  @dec static accessor 2n;
  @dec static accessor [3n];

  @dec static accessor [f()];
}

assert.compareArray(logs, ["computing f", "calling toPrimitive", "a", "#a", "b", "c", "0", "1", "2", "3", "f()"], 'order of observable operations in evaluating class definition');

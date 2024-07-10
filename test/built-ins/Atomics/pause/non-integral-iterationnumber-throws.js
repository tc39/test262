// Copyright (C) 2024 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.pause
description: Atomics.pause throws on non-integral Number argument values
features: [Atomics.pause]
---*/

const values = [
  null,
  NaN,
  Infinity,
  Symbol("foo"),
  "bar",
  /baz/,
  42n,
  {},
  [],
  function() {}
];

for (const v of values) {
  assert.throws(TypeError, () => { Atomics.pause(v); },
                `${v ? v.toString() : v} is an illegal iterationNumber`);
}

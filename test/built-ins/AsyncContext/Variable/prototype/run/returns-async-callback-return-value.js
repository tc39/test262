// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  If the second parameter is an async function, it calls it and returns its
  result value, which is a promise.
info: |
  AsyncContext.Variable.prototype.run ( value, func, ...args )

  10. Let result be Completion(Call(func, undefined, args)).
  ...
  12. Return result.
flags: [async]
includes: [asyncHelpers.js]
features: [AsyncContext]
---*/

const asyncVar = new AsyncContext.Variable();

const obj = {};

asyncTest(async function () {
  const ret = asyncVar.run("foo", async () => obj);
  assert(
    ret instanceof Promise,
    'The return value of `asyncVar.run("foo", async () => obj) is a promise'
  );

  assert.sameValue(await ret, obj, '`ret` resolves to `obj`');
});

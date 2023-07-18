// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
  If the first parameter is an async function, it calls it and returns its
  result value, which is a promise.
info: |
  AsyncContext.Snapshot.prototype.run ( func, ...args )

  4 Let result be Completion(Call(func, undefined, args)).
  ...
  6. Return result.
flags: [async]
includes: [asyncHelpers.js]
features: [AsyncContext]
---*/

const asyncSnapshot = new AsyncContext.Snapshot();

const obj = {};

asyncTest(async function () {
  const ret = asyncSnapshot.run(async () => obj);
  assert(
    ret instanceof Promise,
    'The return value of `asyncSnapshot.run(async () => obj) is a promise'
  );

  assert.sameValue(await ret, obj, '`ret` resolves to `obj`');
});

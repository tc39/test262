// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  If the passed callback is an async function, the returned function calls it
  and returns its return value, which is a promise.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  3. Let closure be a new Abstract Closure with parameters (...args) that captures fn and snapshot and performs the following steps when called:
    ...
    c. Let result be Completion(Call(fn, thisArgument, args)).
    ...
    e. Return result.
  ...
  9. Return CreateBuiltinFunction(closure, length, name, « », realm, prototype, "wrapped").
flags: [async]
includes: [asyncHelpers.js]
features: [AsyncContext]
---*/

const obj = {};

const wrapped = AsyncContext.Snapshot.wrap(async () => obj);

asyncTest(async function () {
  const ret = wrapped();
  assert(
    ret instanceof Promise,
    'The return value of `wrapped()` is a promise'
  );

  assert.sameValue(await ret, obj, '`ret` resolves to `obj`');
});

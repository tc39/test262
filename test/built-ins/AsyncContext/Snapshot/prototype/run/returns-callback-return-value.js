// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
  Calls the first parameter as a function, and returns its return value.
info: |
  AsyncContext.Snapshot.prototype.run ( func, ...args )

  4. Let result be Completion(Call(func, undefined, args)).
  ...
  6. Return result.
features: [AsyncContext]
---*/

const asyncSnapshot = new AsyncContext.Snapshot();

const obj = {};

assert.sameValue(
  asyncSnapshot.run(() => obj),
  obj,
  'The return value of `asyncSnapshot.run(() => obj)` is `obj`'
);

const returnedPromise = asyncSnapshot.run(async () => obj);
assert(
  returnedPromise instanceof Promise,
  'The return value of `asyncSnapshot.run(async () => obj) is a promise'
);

// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  Calls the second parameter as a function, and returns its return value.
info: |
  AsyncContext.Variable.prototype.run ( value, func, ...args )

  10. Let result be Completion(Call(func, undefined, args)).
  ...
  12. Return result.
features: [AsyncContext]
---*/

const asyncVar = new AsyncContext.Variable();

const obj = {};

assert.sameValue(
    asyncVar.run("foo", () => obj),
    obj,
    'The return value of `asyncVar.run("foo", () => obj)` is `obj`'
);

const returnedPromise = asyncVar.run("foo", async () => obj);
assert(
    returnedPromise instanceof Promise,
    'The return value of `asyncVar.run("foo", async () => obj) is a promise'
);

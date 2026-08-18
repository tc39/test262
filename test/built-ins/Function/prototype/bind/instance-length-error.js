// Copyright (C) 2026 MooGoong Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-function.prototype.bind
description: >
  Error thrown when accessing target's `length` property.
info: |
  Function.prototype.bind ( thisArg, ...args )

  1. Let target be the this value.
  2. If IsCallable(target) is false, throw a TypeError exception.
  [...]
  5. Let targetHasLength be ? HasOwnProperty(target, "length").
  6. If targetHasLength is true, then
    a. Let targetLength be ? Get(target, "length").
    [...]
---*/

function fn() {}

Object.defineProperty(fn, "length", {
  get() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  fn.bind();
});

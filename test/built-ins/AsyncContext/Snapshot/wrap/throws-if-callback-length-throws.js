// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  Throws if getting the argument's `length` property throws.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  4. Let length be ? LengthOfArrayLike(fn).

  LengthOfArrayLike ( obj )

  1. Return ℝ(? ToLength(? Get(obj, "length"))).

features: [AsyncContext]
---*/

function CustomError() { }

function callback() { }
Object.defineProperty(callback, 'length', {
  get() {
    throw new CustomError();
  }
});

assert.throws(CustomError, () => {
  AsyncContext.Snapshot.wrap(callback);
});

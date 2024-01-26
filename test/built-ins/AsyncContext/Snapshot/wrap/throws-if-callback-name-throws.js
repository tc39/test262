// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  Throws if getting the argument's `name` property throws.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  5. Let name be ? Get(fn, "name").

features: [AsyncContext]
---*/

function CustomError() { }

function callback() { }
Object.defineProperty(callback, 'name', {
  get() {
    throw new CustomError();
  }
});

assert.throws(CustomError, () => {
  AsyncContext.Snapshot.wrap(callback);
});
// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  Throws if getting the argument's `length` property throws, if the
  property is inherited.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  5. Perform ? CopyNameAndLength(wrapped, fn, "wrapped").

  CopyNameAndLength ( F, Target[, prefix[, argCount ] ] )

  6. Let targetName be ? Get(Target, "name").

features: [AsyncContext]
---*/

function CustomError() { }

function callback() { }
delete callback.name;

Object.setPrototypeOf(callback, {
  get name() {
    throw new CustomError();
  }
});

assert.throws(CustomError, () => {
  AsyncContext.Snapshot.wrap(callback);
});

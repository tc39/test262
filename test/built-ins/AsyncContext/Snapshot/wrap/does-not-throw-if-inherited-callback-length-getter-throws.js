// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  Does not throw if getting the argument's `length` property throws,
  if the property is inherited.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  5. Perform ? CopyNameAndLength(wrapped, fn, "wrapped").

  CopyNameAndLength ( F, Target[, prefix[, argCount ] ] )

  3. Let targetHasLength be ? HasOwnProperty(Target, "length").
  4. If targetHasLength is true, then
    a. Let targetLen be ? Get(Target, "length").

features: [AsyncContext]
---*/

function CustomError() { }

function callback() { }
delete callback.name;

Object.setPrototypeOf(callback, {
  get length() {
    throw new CustomError();
  }
});

AsyncContext.Snapshot.wrap(callback);

// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  Throws if calling HasOwnProperty on the argument's `length` property throws.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  5. Perform ? CopyNameAndLength(wrapped, fn, "wrapped").

  CopyNameAndLength ( F, Target[, prefix[, argCount ] ] )

  3. Let targetHasLength be ? HasOwnProperty(Target, "length").

features: [AsyncContext]
---*/

function CustomError() { }

function originalCallback() { }

const proxyCallback = new Proxy(originalCallback, {
  getOwnPropertyDescriptor(target, property) {
    assert.sameValue(target, originalCallback);
    assert.sameValue(property, 'length');
    throw new CustomError();
  }
});

assert.throws(CustomError, () => {
  AsyncContext.Snapshot.wrap(proxyCallback);
});

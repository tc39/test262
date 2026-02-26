// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  Does not throw if calling HasOwnProperty on the argument's `name`
  property throws.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  5. Perform ? CopyNameAndLength(wrapped, fn, "wrapped").

  CopyNameAndLength ( F, Target[, prefix[, argCount ] ] )

  6. Let targetName be ? Get(Target, "name").

features: [AsyncContext]
---*/

function CustomError() { }

function originalCallback() { }

const proxyCallback = new Proxy(originalCallback, {
  getOwnPropertyDescriptor(target, property) {
    assert.sameValue(target, originalCallback);
    if (property === 'length') {
      return Object.getOwnPropertyDescriptor(originalCallback, 'length');
    }
    throw new CustomError();
  }
});

AsyncContext.Snapshot.wrap(proxyCallback);

// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
  Throws if calling the first parameter throws.
info: |
  AsyncContext.Snapshot.prototype.run ( func, ...args )

  4. Let result be Completion(Call(func, undefined, args)).
  ...
  6. Return result.
features: [AsyncContext]
---*/

function CustomError() { }

const asyncSnapshot = new AsyncContext.Snapshot();

assert.throws(CustomError, () => {
  asyncSnapshot.run(() => {
    throw new CustomError();
  });
});

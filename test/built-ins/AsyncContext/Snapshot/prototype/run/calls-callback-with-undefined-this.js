// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
  Calls the second parameter as a function, with its this value being
  undefined.
info: |
  AsyncContext.Snapshot.prototype.run ( func, ...args )

  4. Let result be Completion(Call(func, undefined, args)).
features: [AsyncContext]
---*/

const asyncSnapshot = new AsyncContext.Snapshot();

asyncSnapshot.run(function () {
  "use strict";
  assert.sameValue(this, undefined);
});

// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    The 'asyncTest' helper reports synchronous errors via $DONE.
includes: [asyncHelpers.js]
---*/
var called = false;
function $DONE(error) {
  called = true;
  assert(error instanceof Test262Error);
}
asyncTest(function () {
  throw new Test262Error("Should not be evaluated");
});
assert(called, "asyncTest called $DONE with a synchronously thrown error");

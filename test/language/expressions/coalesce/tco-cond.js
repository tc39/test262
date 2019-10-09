// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Expression is a candidate for tail-call optimization.
esid: sec-static-semantics-hascallintailposition
flags: [onlyStrict]
features: [tail-call-optimization, coalesce-expression]
includes: [tcoHelper.js]
---*/

var callCount = 0;
(function f(n) {
  if (n === 0) {
    callCount += 1
    return;
  }
  return f(n - 1) ?? false;
}($MAX_ITERATIONS));
assert.sameValue(callCount, 1);

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: The head's declaration may contain duplicate entries
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
---*/

var iterCount = 0;

for (var [x, x] of [[1, 2]]) {
  assert.sameValue(x, 2);
  iterCount += 1;
}

assert.sameValue(iterCount, 1);

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Head's AssignmentExpression may be a MemberExpression
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
---*/

var iterCount = 0;
var x = {};

for (x.y in { attr: null }) {
  assert.sameValue(x.y, 'attr');
  iterCount += 1;
}

assert.sameValue(iterCount, 1);

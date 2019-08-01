// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Head's AssignmentExpression may be CoverParenthesizedExpressionAndArrowParameterList
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
---*/

var iterCount = 0;
var x;

for ((x) of [23]) {
  assert.sameValue(x, 23);
  iterCount += 1;
}

assert.sameValue(iterCount, 1);

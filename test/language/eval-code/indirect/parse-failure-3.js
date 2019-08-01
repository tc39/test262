// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
info: |
    If Result(3).type is not normal, then Result(3).type must be throw.
    Throw Result(3).value as an exception
esid: sec-performeval
description: Continue statement
---*/

assert.throws(SyntaxError, function() {
  (0,eval)("continue;");
});

assert.throws(SyntaxError, function() {
  for (var i = 0; i <= 1; i++) {
    (0,eval)("continue;");
    $ERROR("First iteration should not complete");
  }
  $ERROR("Iteration should not complete");
});

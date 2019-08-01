// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: The body may re-declare variables declared in the head
esid: sec-for-statement
---*/

var iterCount = 0;
var first = true;

for (var x; first; first = false) {
  var x;
  iterCount += 1;
}

assert.sameValue(iterCount, 1);

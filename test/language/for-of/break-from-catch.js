// Copyright (C) Copyright 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.6.4.13 S5.n
description: >
    Control flow during body evaluation should honor `break` statements within
    the `catch` block of `try` statements.
---*/

function* values() {
  yield 1;
  yield 1;
}
var iterable = values();
var i = 0;

for (var x of iterable) {
  i++;

  try {
    throw new Error();
  } catch (err) {
    break;
  }

  $ERROR('This code is unreachable.');
}

assert.sameValue(i, 1);

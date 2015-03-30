// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.6.4.13
description: >
    Control flow during body evaluation should honor `return` statements.
---*/

function* values() {
  yield 1;
  yield 1;
}
var iterable = values();
var i = 0;

var result = (function() {
  for (var x of iterable) {
    i++;
    return 34;

    $ERROR('This code is unreachable.');
  }

  $ERROR('This code is unreachable.');
})();

assert.sameValue(result, 34);
assert.sameValue(i, 1);

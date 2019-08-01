// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: use-strict-directive
description: >
    Strict Mode - Use Strict Directive Prologue is ''use strict''
    which lost the last character ';'
flags: [noStrict]
---*/

function fun() {
  "use strict"
  test262unresolvable = null;
}

assert.throws(ReferenceError, function() {
  fun();
});

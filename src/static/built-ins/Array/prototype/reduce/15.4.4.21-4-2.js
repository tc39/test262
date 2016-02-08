// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-4-2
description: >
    Array.prototype.reduce throws ReferenceError if callbackfn is
    unreferenced
---*/

  var arr = new Array(10);
assert.throws(ReferenceError, function() {
    arr.reduce(foo);
});

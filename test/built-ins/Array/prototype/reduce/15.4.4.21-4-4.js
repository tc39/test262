// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduce
es5id: 15.4.4.21-4-4
description: Array.prototype.reduce throws TypeError if callbackfn is boolean
---*/

  var arr = new Array(10);
assert.throws(TypeError, function() {
    arr.reduce(true);
});

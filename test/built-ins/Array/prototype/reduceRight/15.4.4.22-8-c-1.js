// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduceright
es5id: 15.4.4.22-8-c-1
description: >
    Array.prototype.reduceRight throws TypeError when Array is empty
    and initialValue is not present
---*/

  function callbackfn(prevVal, curVal, idx, obj)
  {
  }

  var arr = new Array(10);
assert.throws(TypeError, function() {
    arr.reduceRight(callbackfn);
});

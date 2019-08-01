// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-array-instances-length
description: >
    Throw RangeError if attempt to set array length property to
    4294967297 (1+2**32)
---*/


assert.throws(RangeError, function() {
  [].length = 4294967297;
});

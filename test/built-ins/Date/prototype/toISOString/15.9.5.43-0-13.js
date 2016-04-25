// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.9.5.43-0-13
description: >
    Date.prototype.toISOString - RangeError is thrown when value of
    date is outside the valid range of time. 
---*/

        var date, dateStr;

assert.throws(RangeError, function() {
                // As specified in ES5 15.9.1.14, time > 8.64e15 is not in the
                // valid range.
                date = new Date(8.64e15 + 1);
                dateStr = date.toISOString();
});

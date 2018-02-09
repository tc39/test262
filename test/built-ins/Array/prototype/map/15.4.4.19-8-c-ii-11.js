// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.map
es5id: 15.4.4.19-8-c-ii-11
description: Array.prototype.map - callbackfn is called with 2 formal parameters
---*/

        function callbackfn(val, idx) {
            return (val > 10 && arguments[2][idx] === val);
        }

        var testResult = [11].map(callbackfn);

assert.sameValue(testResult[0], true, 'testResult[0]');

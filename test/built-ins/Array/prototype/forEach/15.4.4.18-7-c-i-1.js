// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-7-c-i-1
description: >
    Array.prototype.forEach - element to be retrieved is own data
    property on an Array-like object
---*/

        var kValue = { };
        var testResult = false;

        function callbackfn(val, idx, obj) {
            if (idx === 5) {
                testResult = (val === kValue);
            }
        }

        var obj = { 5: kValue, length: 100 };

        Array.prototype.forEach.call(obj, callbackfn);

assert(testResult, 'testResult !== true');

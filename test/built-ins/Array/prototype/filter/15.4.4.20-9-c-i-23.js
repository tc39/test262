// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-i-23
description: >
    Array.prototype.filter - This object is the global object which
    contains index property
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return idx === 0 && val === 11;
        }

        try {
            var oldLen = fnGlobalObject().length;
            fnGlobalObject()[0] = 11;
            fnGlobalObject().length = 1;
            var newArr = Array.prototype.filter.call(fnGlobalObject(), callbackfn);
            return newArr.length === 1 && newArr[0] === 11;
        } finally {
            delete fnGlobalObject()[0];
            fnGlobalObject().length = oldLen;
        }
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-i-23
description: >
    Array.prototype.map - This object is the global object which
    contains index property
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {

        var kValue = "abc";

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                return val === kValue;
            }
            return false;
        }

        try {
            var oldLen = fnGlobalObject().length;
            fnGlobalObject()[0] = kValue;
            fnGlobalObject().length = 2;

            var testResult = Array.prototype.map.call(fnGlobalObject(), callbackfn);

            return testResult[0] === true;
        } finally {
            delete fnGlobalObject()[0];
            fnGlobalObject().length = oldLen;
        }
    }
runTestCase(testcase);

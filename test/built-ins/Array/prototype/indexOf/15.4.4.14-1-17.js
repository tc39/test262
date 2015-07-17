// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-1-17
description: Array.prototype.indexOf applied to the global object
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
        try {
            var oldLen = fnGlobalObject().length;
            fnGlobalObject()[1] = true;
            fnGlobalObject().length = 2;
            return Array.prototype.indexOf.call(fnGlobalObject(), true) === 1;
        } finally {
            delete fnGlobalObject()[1];
            fnGlobalObject().length = oldLen;
        }
    }
runTestCase(testcase);

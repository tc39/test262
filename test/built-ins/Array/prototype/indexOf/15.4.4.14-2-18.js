// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-2-18
description: >
    Array.prototype.indexOf applied to String object, which implements
    its own property get method
includes: [runTestCase.js]
---*/

function testcase() {
        var str = new String("012");
        try {
            String.prototype[3] = "3";
            return Array.prototype.indexOf.call(str, "2") === 2 &&
                Array.prototype.indexOf.call(str, "3") === -1;
        } finally {
            delete String.prototype[3];
        }
    }
runTestCase(testcase);

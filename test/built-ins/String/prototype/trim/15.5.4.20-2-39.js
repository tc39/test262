// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-39
description: >
    String.prototype.trim - 'this' is an object which has an own
    valueOf method
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {
            valueOf: function () {
                return "abc";
            }
        };

        return (String.prototype.trim.call(obj) === "[object Object]");
    }
runTestCase(testcase);

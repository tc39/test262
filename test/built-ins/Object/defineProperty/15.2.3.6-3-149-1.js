// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-149-1
description: >
    Object.defineProperty - 'Attributes' is an Arguments object which
    implements its own [[Get]] method to access the 'value' property
    of prototype object (8.10.5 step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        try {
            Object.prototype.value = "arguments";
            var argObj = (function () { return arguments; })();


            Object.defineProperty(obj, "property", argObj);

            return obj.property === "arguments";
        } finally {
            delete Object.prototype.value;
        }
    }
runTestCase(testcase);

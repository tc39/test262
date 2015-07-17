// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-258-1
description: >
    Object.defineProperty - 'Attributes' is an Arguments object which
    implements its own [[Get]] method to access the 'set' property of
    prototype object (8.10.5 step 8.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var data = "data";
        try {
            Object.prototype.set = function (value) {
                data = value;
            };
            var argObj = (function () { return arguments; })();

            Object.defineProperty(obj, "property", argObj);
            obj.property = "overrideData";

            return obj.hasOwnProperty("property") && data === "overrideData";
        } finally {
            delete Object.prototype.set;
        }
    }
runTestCase(testcase);

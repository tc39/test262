// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-247
description: >
    Object.defineProperties - 'descObj' is the JSON object which
    implements its own [[Get]] method to get 'set' property (8.10.5
    step 8.a)
includes: [runTestCase.js]
---*/

function testcase() {

        var data = "data";
        var setFun = function (value) {
            data = value;
        };
        try {
            JSON.prop = {
                set: setFun
            };

            var obj = {};
            Object.defineProperties(obj, JSON);
            obj.prop = "JSONData";
            return obj.hasOwnProperty("prop") && data === "JSONData";
        } finally {
            delete JSON.prop;
        }
    }
runTestCase(testcase);

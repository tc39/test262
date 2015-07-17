// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-216
description: >
    Object.defineProperties - 'descObj' is the global object which
    implements its own [[Get]] method to get 'get' property (8.10.5
    step 7.a)
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {

        var obj = {};

        try {
            fnGlobalObject().get = function () {
                return "global";
            };

            Object.defineProperties(obj, {
                property: fnGlobalObject()
            });

            return obj.property === "global";
        } finally {
            delete fnGlobalObject().get;
        }
    }
runTestCase(testcase);

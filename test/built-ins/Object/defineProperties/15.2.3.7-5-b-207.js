// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-207
description: >
    Object.defineProperties - 'descObj' is a Boolean object which
    implements its own [[Get]] method to get 'get' property (8.10.5
    step 7.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var descObj = new Boolean(false);

        descObj.get = function () {
            return "Boolean";
        };

        Object.defineProperties(obj, {
            property: descObj
        });

        return obj.property === "Boolean";
    }
runTestCase(testcase);

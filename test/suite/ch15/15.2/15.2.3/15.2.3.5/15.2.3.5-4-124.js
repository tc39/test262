// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-124
description: >
    Object.create - one property in 'Properties' is the global object
    that uses Object's [[Get]] method to access the 'configurable'
    property (8.10.5 step 4.a)
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {

        try {
            fnGlobalObject().configurable = true;

            var newObj = Object.create({}, {
                prop: fnGlobalObject() 
            });

            var result1 = newObj.hasOwnProperty("prop");
            delete newObj.prop;
            var result2 = newObj.hasOwnProperty("prop");

            return result1 === true && result2 === false;
        } finally {
            delete fnGlobalObject().configurable;
        }
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-15
description: >
    Object.create - argument 'Properties' is the Aguments object
    (15.2.3.7 step 2)
includes: [runTestCase.js]
---*/

function testcase() {

        var result = false;

        var argObj = (function () { return arguments; })();

        Object.defineProperty(argObj, "prop", {
            get: function () {
                result = ('[object Arguments]' === Object.prototype.toString.call(this));
                return {};
            },
            enumerable: true
        });

        var newObj = Object.create({}, argObj);
        return result && newObj.hasOwnProperty("prop");
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.9-2-d-2
description: Object.freeze - 'O' is an Array object
includes: [runTestCase.js]
---*/

function testcase() {
        var arrObj = [0, 1];

        Object.freeze(arrObj);

        return Object.isFrozen(arrObj);
    }
runTestCase(testcase);

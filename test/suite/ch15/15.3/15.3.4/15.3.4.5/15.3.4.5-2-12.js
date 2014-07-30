// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.3.4.5-2-12
description: Function.prototype.bind throws TypeError if 'Target' is a boolean
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Function.prototype.bind.call(true);
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        } 
    }
runTestCase(testcase);

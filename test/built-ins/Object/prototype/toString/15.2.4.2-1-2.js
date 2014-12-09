// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.4.2-1-2
description: >
    Object.prototype.toString - '[object Undefined]' will be returned
    when 'this' value is undefined
includes: [runTestCase.js]
---*/

function testcase() {
        return Object.prototype.toString.apply(undefined, []) === "[object Undefined]";
    }
runTestCase(testcase);

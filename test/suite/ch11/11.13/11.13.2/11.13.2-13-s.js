// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.13.2-13-s
description: >
    Strict Mode - ReferenceError isn't thrown if the
    LeftHandSideExpression of a Compound Assignment operator(/=)
    evaluates to a resolvable reference
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        "use strict";
        var _11_13_2_13 = 6
        _11_13_2_13 /= 2;
        return _11_13_2_13 === 3;
    }
runTestCase(testcase);

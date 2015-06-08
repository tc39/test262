// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 7.6.1.2-16-s
description: >
    SyntaxError isn't thrown when '_implements' occurs
includes: [runTestCase.js]
---*/

function testcase() {
        var _implements = 1;
        return _implements === 1;
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.8-2-1
description: >
    Object.seal - extensible of 'O' is set as false even if 'O' has no
    own property
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var preCheck = Object.isExtensible(obj);

        Object.seal(obj);

        return preCheck && !Object.isExtensible(obj);
    }
runTestCase(testcase);

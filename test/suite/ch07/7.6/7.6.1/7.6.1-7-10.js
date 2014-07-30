// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 7.6.1-7-10
description: >
    Allow reserved words as property names by index assignment,
    accessed via indexing: in, try, class
includes: [runTestCase.js]
---*/

function testcase() {
        var tokenCodes = {};
        tokenCodes['in'] = 0;
        tokenCodes['try'] = 1;
        tokenCodes['class'] = 2;
        var arr = [
            'in',
            'try',
            'class'
        ];
        for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);

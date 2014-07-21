// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Allow reserved words as property names by dot operator assignment,
    accessed via indexing: public, yield, interface
includes: [runTestCase.js]
---*/

function testcase() {
        var tokenCodes  = {};
        tokenCodes.public = 0;
        tokenCodes.yield = 1;
        tokenCodes.interface = 2;
        var arr = [
            'public',
            'yield',
            'interface'
         ];
         for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);

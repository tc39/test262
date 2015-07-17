// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-7-3
description: >
    Allow reserved words as property names by index assignment,
    accessed via indexing: instanceof, typeof, else
includes: [runTestCase.js]
---*/

function testcase() {
        var tokenCodes = {};
        tokenCodes['instanceof'] = 0;
        tokenCodes['typeof'] = 1;
        tokenCodes['else'] = 2;     
        var arr = [
            'instanceof',
            'typeof',
            'else'
        ];
        for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);

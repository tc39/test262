// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-7-16
description: >
    Allow reserved words as property names by index assignment,
    accessed via indexing: undefined, NaN, Infinity
includes: [runTestCase.js]
---*/

function testcase() {
        var tokenCodes = {};
        tokenCodes['undefined'] = 0;
        tokenCodes['NaN'] = 1;
        tokenCodes['Infinity'] = 2;     
        var arr = [
            'undefined',
            'NaN',
            'Infinity'
        ];
        for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);

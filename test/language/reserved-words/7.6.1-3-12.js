// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-3-12
description: >
    Allow reserved words as property names by index
    assignment,verified with hasOwnProperty: const, export, import
includes: [runTestCase.js]
---*/

function testcase() {
        var tokenCodes  = {};
        tokenCodes['const'] = 0;
        tokenCodes['export'] = 1;
        tokenCodes['import'] = 2;
        var arr = [
            'const',
            'export',
            'import'
            ];
        for(var p in tokenCodes) {       
            for(var p1 in arr) {                
                if(arr[p1] === p) {
                    if(!tokenCodes.hasOwnProperty(arr[p1])) {
                        return false;
                    };
                }
            }
        }
        return true;
    }
runTestCase(testcase);

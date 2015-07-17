// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-1-2
description: >
    Allow reserved words as property names at object initialization,
    verified with hasOwnProperty: break, case, do
includes: [runTestCase.js]
---*/

function testcase(){      
        var tokenCodes  = { 
            break: 0,
            case: 1,
            do: 2
        };
        var arr = [
            'break',
            'case',
            'do'
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

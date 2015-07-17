// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-1-9
description: >
    Allow reserved words as property names at object initialization,
    verified with hasOwnProperty: if, throw, delete
includes: [runTestCase.js]
---*/

function testcase(){      
        var tokenCodes  = { 
            if: 0, 
            throw: 1, 
            delete: 2
        };
        var arr = [
            'if', 
            'throw', 
            'delete'
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

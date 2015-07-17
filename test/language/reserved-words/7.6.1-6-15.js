// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-6-15
description: >
    Allow reserved words as property names by dot operator assignment,
    accessed via indexing: package, protected, static
includes: [runTestCase.js]
---*/

function testcase() {
        var tokenCodes  = {};
        tokenCodes.package = 0;
        tokenCodes.protected = 1;
        tokenCodes.static = 2;
        var arr = [
            'package',
            'protected',
            'static' 
         ];
         for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-6-12
description: >
    Allow reserved words as property names by dot operator assignment,
    accessed via indexing: const, export, import
includes: [runTestCase.js]
---*/

function testcase() {
        var tokenCodes  = {};
        tokenCodes.const = 0;
        tokenCodes.export = 1;
        tokenCodes.import = 2;
        var arr = [
            'const',
            'export',
            'import'
         ];
         for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);

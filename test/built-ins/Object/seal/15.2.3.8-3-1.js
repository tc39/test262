// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.8-3-1
description: Object.seal - returned object is not extensible
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        var preCheck = Object.isExtensible(obj);
        Object.seal(obj);
        return preCheck && !Object.isExtensible(obj);

    }
runTestCase(testcase);

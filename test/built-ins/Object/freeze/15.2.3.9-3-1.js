// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-3-1
description: Object.freeze - returned object is not extensible
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        Object.freeze(obj);
        return !Object.isExtensible(obj);

    }
runTestCase(testcase);

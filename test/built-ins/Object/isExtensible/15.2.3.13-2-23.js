// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.13-2-23
description: Object.isExtensible returns false if 'O' is not extensible
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        Object.preventExtensions(obj);
        return !Object.isExtensible(obj);

    }
runTestCase(testcase);

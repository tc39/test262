// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-4-2
description: Object.freeze - 'O' is frozen already
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};

        obj.foo = 10; // default value of attributes: writable: true, enumerable: true

        Object.freeze(obj);

        Object.freeze(obj);
        return Object.isFrozen(obj);

    }
runTestCase(testcase);

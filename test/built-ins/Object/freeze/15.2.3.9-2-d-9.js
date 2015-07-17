// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-d-9
description: Object.freeze - 'O' is the Arguments object
includes: [runTestCase.js]
---*/

function testcase() {
        var argObj = (function () { return arguments; } ());

        Object.freeze(argObj);

        return Object.isFrozen(argObj);

    }
runTestCase(testcase);

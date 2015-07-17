// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.8-2-c-1
description: Object.seal - 'O' is a Function object
includes: [runTestCase.js]
---*/

function testcase() {

        var fun = function () { };
        var preCheck = Object.isExtensible(fun);
        Object.seal(fun);

        return preCheck && Object.isSealed(fun);

    }
runTestCase(testcase);

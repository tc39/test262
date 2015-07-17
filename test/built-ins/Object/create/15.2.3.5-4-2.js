// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-2
description: Object.create - 'Properties' is undefined
includes: [runTestCase.js]
---*/

function testcase() {

        var newObj = Object.create({}, undefined);
        return (newObj instanceof Object);
    }
runTestCase(testcase);

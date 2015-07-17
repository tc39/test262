// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.3.2-1-12
description: Array.isArray applied to Error object
includes: [runTestCase.js]
---*/

function testcase() {

        return !Array.isArray(new SyntaxError());
    }
runTestCase(testcase);

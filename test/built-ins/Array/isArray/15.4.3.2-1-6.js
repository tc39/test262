// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.3.2-1-6
description: Array.isArray applied to String object
includes: [runTestCase.js]
---*/

function testcase() {

        return !Array.isArray(new String("hello\nworld\\!"));
    }
runTestCase(testcase);

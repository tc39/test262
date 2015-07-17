// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-36
description: >
    String.prototype.trim - 'this' is a Boolean Object that converts
    to a string
includes: [runTestCase.js]
---*/

function testcase() {
        return (String.prototype.trim.call(new Boolean(false)) === "false");
    }
runTestCase(testcase);

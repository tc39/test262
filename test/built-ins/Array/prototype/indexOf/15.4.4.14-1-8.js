// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-1-8
description: Array.prototype.indexOf applied to String object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = new String("null");

        return Array.prototype.indexOf.call(obj, 'l') === 2;
    }
runTestCase(testcase);

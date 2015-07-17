// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.1.2.3-2-1
description: >
    pareseFloat - 'trimmedString' is the empty string when inputString
    does not contain any such characters
includes: [runTestCase.js]
---*/

function testcase() {
        return isNaN(parseFloat("")) && parseFloat("") !== parseFloat("");
    }
runTestCase(testcase);

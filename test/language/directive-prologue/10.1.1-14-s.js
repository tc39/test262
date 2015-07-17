// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1-14-s
description: >
    Strict Mode - The call to eval function is contained in a Strict
    Mode block
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        'use strict';
        try {
            eval("var public = 1;");
            return false;
        } catch (e) {
            return true;
        }
    }
runTestCase(testcase);
